
import axios from "axios"
import { FeedItem } from "../Item"

export const parseScrapbox = async (url: string): Promise<FeedItem[]> => {
  // @ts-ignore
  const { data } = await axios.get(url)
  return data.pages.map(({ title,descriptions, created, ...p }: any) => {
    return {
      title: title,
      date: new Date(created * 1000),
      description: descriptions.join("\n"),
      link: `https://scrapbox.io/terrierscript/${encodeURIComponent(title)}`
    }
  })
}
