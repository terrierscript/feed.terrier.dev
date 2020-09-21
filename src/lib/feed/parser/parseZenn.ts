import axios from "axios"
import { FeedItem } from "../Item"
import { parse } from 'node-html-parser';

export const parseZenn = async (url: string): Promise<FeedItem[]> => {
  const { data } = await axios.get(url, {
    responseType: "document"
  })
  const root = parse(data,{script:true})
  const data2 = root.querySelector("#__NEXT_DATA__")
  const data3 = JSON.parse(data2.rawText)
  return data3.props.pageProps.articles.map(({title, slug,topics }: any)  => {
    const date = slug.split("-")
    return { 
      title,
      link: `https://zenn.dev/terrierscript/articles/${slug}`,
      date: new Date(date[0], date[1],date[2]),
      // description: topics.join(",")
    }
  })
}
