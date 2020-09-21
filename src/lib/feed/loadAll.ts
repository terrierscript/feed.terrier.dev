import { FeedItem } from "./Item"
import { parseMedia } from "./parser/parseMedia"
import { rssConfig } from "./rssConfig"

export type FeedItemForSSR = Omit<Omit<FeedItem, "date">, "description"> & {
  datetime: number
  mediaId: string
  description: string | null
}


export const loadAllForSSR = async (): Promise<FeedItemForSSR[]> => {
  const fetches = Promise.all(rssConfig.map(async config => {
    const feeds = await parseMedia(config)
    return feeds.map((d: FeedItem) => {
      const { date, description, ...rest} =d
      return {
        ...rest,
        datetime: d.date.getTime(),
        mediaId: config.id,
        description: description ?? null
      }
    })
  }))
  const results = (await fetches).flat()
  results.sort((a,b) => {
    return b.datetime - a.datetime
  })
  return results.flat()
}
