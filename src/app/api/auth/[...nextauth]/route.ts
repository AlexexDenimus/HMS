import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign In",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.password
        );

        const userRes = {
          id: user.id + "",
          email: user.email,
          name: user.name,
        };

        return isPasswordValid ? userRes : null;
      },
    }),
  ],
  callbacks: {
    session: ({ session, token, user }) => {
      const userName = token.name || session.user?.name;
      const userEmail = token.email || session.user?.email;

      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          name: userName,
          email: userEmail,
        },
      };
    },
    jwt: ({ token, user, trigger, session }) => {
      if (trigger === "update") {
        return {
          ...token,
          name: session.user.name,
          email: session.user.email,
        };
      }

      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }

      return token;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
