import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { openDb } from '@/utils/sqLiteDb'
import bcrypt from 'bcrypt'

// noinspection JSUnusedGlobalSymbols
export const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text' },
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials) {
				if (!credentials) return null

				const db = await openDb()

				const user = await db.get(
					'SELECT * FROM users WHERE username = ?',
					credentials.username
				)
				if (!user) {
					return null
				}

				const isMatch = await bcrypt.compare(
					credentials.password,
					user.password
				)
				if (!isMatch) {
					return null
				}

				return {
					id: user.id.toString(),
					name: user.username,
					email: user.email,
					isAdmin: user.isAdmin
				}
			}
		})
	],
	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id
				session.user.isAdmin = token.isAdmin
			}
			return session
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
				token.isAdmin = user.isAdmin
			}
			return token
		}
	}
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
