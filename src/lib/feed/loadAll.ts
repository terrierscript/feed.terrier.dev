import { FeedItem } from "./Item"
import { parseRss } from "./parser/parseRss"
import { parseScrapbox } from "./parser/parseScrapbox"
import { rssConfig } from "./rssConfig"

export type FeedItemForSSR = Omit<FeedItem, "date"> & {
  date: number
}
export const loadAllForSSR = async (): Promise<FeedItemForSSR[]> => {
  const fetches = Promise.all(rssConfig.map(config => {
    switch (config.id) {
      case "scrapbox":
        return parseScrapbox(config.origin)
      default:
        return parseRss(config.origin)
    }
  }))
  const results = await fetches
  return results.flat().map(d => {
    return {
      ...d, date: d.date.getTime()
    }
  })
}
