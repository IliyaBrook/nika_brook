export const getApiBaseUrl = (): string => {
  if (typeof window === 'undefined') {
    // server-side url
    return process.env.API_URL_INTERNAL || process.env.NEXT_PUBLIC_API_URL
  } else {
    // client-side url
    return process.env.NEXT_PUBLIC_API_URL || '/api'
  }
}
