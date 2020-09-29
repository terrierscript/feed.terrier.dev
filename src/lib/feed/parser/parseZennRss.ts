// const fromFeedItem = require("./fromFeedItem")
// @ts-ignore
import Parser from "rss-parser"
import { FeedItem } from "../Item"
const parser = new Parser()

const parseRssItem = (rawItem: any) => {
  const { title, link, pubDate, description } = rawItem
  const [slug] = link.split("/").reverse()
  const date = slug.split("-")

  return {
    title,
    link,
    date: new Date(date[0], date[1] - 1, date[2]),
    description
  }
}

export const parseZennRss = async (url: string): Promise<FeedItem[]> => {
  const { items } = await parser
    .parseURL(url)
  // console.log(items)
  return items?.map((item: any) => parseRssItem(item)) ?? []
}

// module.exports = (url, config) => fromFeedItem(parseRss(url), config)
