import axios from "axios"
import { getUrlByMedia } = require("../../app/lib/feed/loader")
const
export default (req, res) => {
  const {
    query: { media }
  } = req
  const url = getUrlByMedia(media, true)
  axios(url).then(({ data, headers }) => {
    const copyHeaders = ["content-type", "etag", "cache-control"]
    // console.log(headers)
    copyHeaders.map(key => {
      res.setHeader(key, headers[key])
    })
    res.send(data)
    res.end()
  })
}
