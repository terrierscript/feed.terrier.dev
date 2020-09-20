import axios from "axios"
import { NextApiRequest, NextApiResponse } from "next"
import { getConfigByMedia } from "../../../lib/feed/rssConfig"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { media } = req.query
  if (!media || typeof media !== "string") {
    return res.status(400).end()
  }
  const config = getConfigByMedia(media)
  if (!config?.origin) {
    return res.status(400).end()
  }

  axios(config.origin).then(({ data, headers }) => {
    const copyHeaders = ["content-type", "etag", "cache-control"]
    // console.log(headers)
    copyHeaders.map(key => {
      res.setHeader(key, headers[key])
    })
    res.send(data)
    res.end()
  })
}
