import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this with actual database verification
        const user = { id: "1", name: "Admin User", email: credentials?.email, role: "admin" };

        if (credentials?.email === "admin@example.com" && credentials?.password === "admin123") {
          return user;
        } else if (credentials?.email === "user@example.com" && credentials?.password === "user123") {
          return { id: "2", name: "Normal User", email: credentials?.email, role: "user" };
        }

        throw new Error("Invalid email or password");
      },
    }),
  ],
  callbacks: {
    async jwt({ tokens, user }) {
      if (user) {
        token.role = user.role; // Store role in JWT token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role; // Attach role to session
      }
      return session;
    },
  },
  pages: {
    signIn: "/login", // Custom login page (optional)
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
