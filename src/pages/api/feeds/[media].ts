import { NextApiRequest, NextApiResponse } from "next"
import { parseMedia } from "../../../lib/feed/parser/parseMedia"
import { getConfigByMedia } from "../../../lib/feed/rssConfig"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { media } = req.query
  if (!media || typeof media !== "string") {
    return res.status(400).end()
  }
  const config = getConfigByMedia(media)
  if (!config) {
    return res.status(400).end()
  }
  const data = await parseMedia(config)
  res.send(data)
  res.end()
}
