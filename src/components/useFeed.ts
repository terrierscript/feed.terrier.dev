import { useState } from "react"
import useSWR from "swr"
import { parseRss } from "../lib/feed/parser/parseRss"
import { Config } from "../lib/feed/rssConfig"

const mediaProxyUrl = (id: string) => `/api/feed/${id}`
const getUrl = (id: string) => {

}


export const useFeed = (site: Config) => {
  const url = mediaProxyUrl(site.id)
  return useSWR(url, () => {
    const r = parseRss(url)
    return r
    //   .then(r => {
    //   const z = await r
    //   return z
    // })
  }, {
    revalidateOnMount: true
  })
  // return result
}


