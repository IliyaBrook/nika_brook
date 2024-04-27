'use server'

import https from 'node:https'

interface IpApiResponse {
  country_name: string
}

export async function getCountryByIp(ip: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const options = {
      path: `/${ip}/json/`,
      host: 'ipapi.co',
      method: 'GET',
      headers: {
        'User-Agent': 'nodejs-ipapi'
      }
    }

    const req = https.request(options, (res) => {
      let body = ''
      res.on('data', (chunk: string) => {
        body += chunk
      })

      res.on('end', () => {
        if (res.statusCode === 404) {
          reject(new Error('Resource not found'))
          return
        }

        try {
          const response: IpApiResponse = JSON.parse(body)
          resolve(response.country_name)
        } catch (e) {
          reject(e)
        }
      })
    })

    req.on('error', (e) => {
      reject(e)
    })

    req.end()
  })
}
