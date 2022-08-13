import axios from "axios"
import { FeedItem } from "../Item"
import { parse } from 'node-html-parser'

/** @deprecated */
export const parseZennScrap = async (url: string): Promise<FeedItem[]> => {
  const { data } = await axios.get(url, {
    responseType: "document"
  })
  const root = parse(data,
    // { script: true }
  )
  const data2 = root.querySelector("#__NEXT_DATA__")
  const data3 = JSON.parse(data2?.rawText ?? "")
  console.log(data3.props.pageProps)
  return data3.props.pageProps.scraps.map((
    item: any) => {
    const { title, slug, topics, createdAt, ...rest } = item
    const date = slug.split("-")
    return {
      title,
      link: `https://zenn.dev/terrierscript/scraps/${slug}`,
      date: new Date(createdAt)
      // description: topics.join(",")
    }
  })
}
