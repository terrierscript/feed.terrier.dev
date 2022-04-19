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
    try {
      const feeds = await parseMedia(config)
      return feeds.map((d: FeedItem) => {
        const { date, description, ...rest } = d
        // console.log(config.id, date.getTime())
        return {
          ...rest,
          datetime: d.date.getTime(),
          mediaId: config.id,
          description: description ?? null
        }
      })
    } catch (e) {
      console.error(e)
      return []
    }
  }))
  const results = (await fetches).flat()
  const sorted = results.concat().sort((a, b) => {
    if (!a.datetime) {
      return 1
    }
    if (!b.datetime) {
      return -1
    }
    return ((b.datetime ?? 0) - (a.datetime ?? 0)) > 0 ? 1 : -1
  })
  console.log(JSON.stringify(sorted, null, 2))
  return sorted.flat()
}
