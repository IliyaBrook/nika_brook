import { TPages } from '@/types/pages'
import { getApiBaseUrl } from '@/utils/enviroments'

export async function logVisits(pageName: TPages): Promise<void> {
  'use server'
  try {
    void fetch(`${getApiBaseUrl()}/visits`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ pageName }),
      next: {
        revalidate: 0
      }
    })
  } catch (e) {
    new Error('Error logging visit:', e)
  }
}
