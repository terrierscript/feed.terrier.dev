import { FeedItem } from "./Item"
import { parseMedia } from "./parser/parseMedia"
import { rssConfig } from "./rssConfig"

export type FeedItemForSSR = Omit<FeedItem, "date"> & {
  datetime: number
  mediaId: string
}


export const loadAllForSSR = async (): Promise<FeedItemForSSR[]> => {
  const fetches = Promise.all(rssConfig.map(async config => {
    const feeds = await parseMedia(config)
    return feeds.map((d: FeedItem) => {
      const { date, ...rest} =d
      return {
        ...rest,
        datetime: d.date.getTime(),
        mediaId: config.id
      }
    })
  }))
  const results = (await fetches).flat()
  results.sort((a,b) => {
    return b.datetime - a.datetime
  })
  return results.flat()
}
