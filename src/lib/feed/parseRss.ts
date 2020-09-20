// const fromFeedItem = require("./fromFeedItem")
// @ts-ignore
import Parser from "rss-parser"
const parser = new Parser()

type Item = any
const parseRssItem = (item: Item) => {
  const { title, link, pubDate } = item
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
  return items?.map((item: Item) => parseRssItem(item)) ?? []
}

// module.exports = (url, config) => fromFeedItem(parseRss(url), config)
