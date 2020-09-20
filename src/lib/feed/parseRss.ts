// const fromFeedItem = require("./fromFeedItem")
// @ts-ignore
import Parser from "rss-parser"
import { Item } from "./Item"
const parser = new Parser()

const parseRssItem = (rawItem: any) => {
  const { title, link, pubDate } = rawItem
  return {
    title,
    link,
    date: new Date(pubDate)
  }
}

export const parseRss = async (url: string): Promise<Item[]> => {
  const { items } = await parser
    .parseURL(url)
  // console.log(items)
  return items?.map((item: any) => parseRssItem(item)) ?? []
}

// module.exports = (url, config) => fromFeedItem(parseRss(url), config)
