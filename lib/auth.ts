import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

async function loadUserAccessClaims(userId: string) {
  return prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      accessType: true,
      hasFullAccess: true,
      entryPurchased: true,
      subscriptionStatus: true,
      hasAIAdvisor: true,
      canUseSubscription: true,
      assetSplit: true,
      retirementImpact: true,
      vaDisability: true,
      housingScenario: true,
    },
  });
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user || !user.password) {
          throw new Error("Invalid email or password");
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }

      const userId = typeof token.id === "string" ? token.id : undefined;

      if (userId) {
        try {
          const userClaims = await loadUserAccessClaims(userId);

          if (userClaims) {
            // Use spreading or define explicitly to ensure a fresh, serializable object.
            // This prevents mutating read-only objects that might cause ErrorEvent crashes.
            return {
              ...token,
              accessType: userClaims.accessType,
              hasFullAccess: !!userClaims.hasFullAccess,
              entryPurchased: !!userClaims.entryPurchased,
              subscriptionStatus: userClaims.subscriptionStatus,
              hasAIAdvisor: !!userClaims.hasAIAdvisor,
              canUseSubscription: !!userClaims.canUseSubscription,
              addons: {
                assetSplit: !!userClaims.assetSplit,
                retirementImpact: !!userClaims.retirementImpact,
                vaDisability: !!userClaims.vaDisability,
                housingScenario: !!userClaims.housingScenario,
              }
            };
          }
        } catch (error) {
          console.error("JWT_ERR:", error);
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        // Enforce a brand new object structure to avoid mutation conflicts in React 19/Node 20
        const user = {
          ...session.user,
          id: token.id as string,
          accessType: token.accessType as string,
          hasFullAccess: !!token.hasFullAccess,
          entryPurchased: !!token.entryPurchased,
          subscriptionStatus: token.subscriptionStatus as string,
          hasAIAdvisor: !!token.hasAIAdvisor,
          canUseSubscription: !!token.canUseSubscription,
          addons: token.addons as any,
        };

        return {
          ...session,
          user,
        };
      }
      return session;
    },
  },
};
