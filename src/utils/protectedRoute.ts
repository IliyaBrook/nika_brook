'use server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export async function protectedRoute() {
	const session = await getServerSession(authOptions)
	const isAdmin = session?.user?.isAdmin === 'true'

	if (!isAdmin) {
		redirect('/')
	}
}
