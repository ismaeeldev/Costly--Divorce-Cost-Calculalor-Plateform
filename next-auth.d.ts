import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
      accessType?: string | null;
      hasFullAccess?: boolean;
      subscriptionStatus?: string | null;
    };
  }

  interface User {
    id: string;
    accessType?: string | null;
    hasFullAccess?: boolean;
    subscriptionStatus?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string | null;
    accessType?: string | null;
    hasFullAccess?: boolean;
    subscriptionStatus?: string | null;
  }
}