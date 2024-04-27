// noinspection JSUnusedGlobalSymbols

import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    isAdmin?: boolean
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    isAdmin?: boolean
  }
}

declare module 'next-auth/react' {
  interface Session {
    user?: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
      isAdmin?: boolean
    }
  }
}
declare module 'next-auth' {
  interface Session {
    user: {
      id?: string
      name?: string
      email?: string
      image?: string
      isAdmin?: boolean
    }
  }
}
