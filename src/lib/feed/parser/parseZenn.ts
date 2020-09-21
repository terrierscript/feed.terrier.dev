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
  console.log(data3.props.pageProps.articles)
  return data3.props.pageProps.articles.map(({title, slug }: any)  => {
    const date = slug.split("-")
    return { 
      title,
      link: `https://zenn.dev/terrierscript/${slug}`,
      date: new Date(date[0], date[1],date[2])
    }
  })
  // return []
  // return data.pages.map(({ title, created, ...p }: any) => {
  //   return {
  //     title: title,
  //     date: new Date(created * 1000),
  //     link: `https://scrapbox.io/terrierscript/${encodeURIComponent(title)}`
  //   }
  // })
}
