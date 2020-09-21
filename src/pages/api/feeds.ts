import { NextApiRequest, NextApiResponse } from "next"
import { loadAllForSSR } from "../../lib/feed/loadAll"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const feeds  = await loadAllForSSR()
  res.json(feeds)
}