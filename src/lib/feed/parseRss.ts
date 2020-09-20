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

export const parseRss = (url: string) => {
  return parser
    .parseURL(url)
    .then(({ items }) => items?.map(item => parseRssItem(item)))
}

// module.exports = (url, config) => fromFeedItem(parseRss(url), config)
