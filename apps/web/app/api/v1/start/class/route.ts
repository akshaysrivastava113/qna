import type { NextApiRequest, NextApiResponse } from 'next'
 
export function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Process a POST request
    return Response.json({ message: 'Hello from Next.js!' })
  } else {
    // Handle any other HTTP method
  }
}