import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"


import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"

const neon = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaNeon(neon)
const prisma = new PrismaClient({ adapter })

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  adapter: PrismaAdapter(prisma),
})
