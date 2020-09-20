import useSWR from "swr"
import { parseRss } from "./parseRss"
import { rssConfig } from "./rssConfig"


export const useFeed = async () => {
  const site = rssConfig[0]
  // const result =
  return useSWR(site.id, () => {
    return parseRss(site.origin)
  })
  // return result
}

