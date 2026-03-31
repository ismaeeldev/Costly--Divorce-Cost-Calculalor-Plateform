import { withAuth } from "next-auth/middleware";

// Provide a basic setup, currently not protecting anything specifically
export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: [
    // Add paths here to protect them
    // "/dashboard/:path*",
    // "/profile/:path*",
  ],
};
