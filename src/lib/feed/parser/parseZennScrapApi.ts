import axios from "axios"
import { FeedItem } from "../Item"
import { parse } from 'node-html-parser'

export const parseZennScrapApi = async (url: string): Promise<FeedItem[]> => {
  const { data } = await axios.get(url,)
  return data.scraps.map((
    item: any) => {
    const { title, slug, topics, created_at, ...rest } = item
    // const date = slug.split("-")
    return {
      title,
      link: `https://zenn.dev/terrierscript/scraps/${slug}`,
      date: new Date(created_at)
      // description: topics.join(",")
    }
  })
}
