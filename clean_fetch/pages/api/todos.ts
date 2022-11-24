// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
  body: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | { message: string }>
) {
  setTimeout(() => {
    if (req.method === 'POST') {

      res.status(200).json({ name: 'John Doe', body: req.body })
    } else {
      res.status(500).json({ message: 'error' })
    }
  }, 2000)
}
