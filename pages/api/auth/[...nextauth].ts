import { DB_CONNECTION, DB_NAME } from "@/config/connections";
import { verifyPassword } from "@/utils/passwords";
import axios from "axios";
import { MongoClient } from "mongodb";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    id: number; // <- here it is
  }
}

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    // @ts-ignore
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        const session = await MongoClient.connect(DB_CONNECTION);
        const db = session.db(DB_NAME);
        const collection = db.collection("Customers");
        const userToValidate = await collection.findOne({
          email: credentials.username,
        });
        const validatePassword = await verifyPassword(
          credentials.password,
          userToValidate?.password
        );
        if (userToValidate && validatePassword) {
          return userToValidate as any;
        }
        return null;
      },
      // @ts-ignore
      callbacks: {
        async signIn({ user, account, profile, email, credentials }: any) {
          // Si el usuario no es encontrado o las credenciales fallan
          if (!user) {
            throw new Error("Credenciales incorrectas");
          }
          return true;
        },
        async redirect({ url, baseUrl }: any) {
          // Si existe un error en la URL, redirige a la página personalizada de errores
          return baseUrl + "/sessions/signin?error=CredentialsSignin";
        },
      },
      pages: {
        signIn: "/sessions/signin", // Tu página personalizada de login
        error: "/sessions/signin", // Página personalizada en caso de error
      },
    }),
  ],
};

export default NextAuth(authOptions);
