import { Config } from "../rssConfig"
import { parseRss } from "./parseRss"
import { parseScrapbox } from "./parseScrapbox"
import { parseZennRss } from "./parseZennRss"
import { parseZennScrap } from "./parseZennScrap"


export const parseMedia = async (config: Config) => {
  switch (config.id) {
    case "scrapbox":
      return parseScrapbox(config.origin)
    case "zenn":
      return parseZennRss(config.origin)
    case "zennScrap":
      const scr = await parseZennScrap(config.origin)
      return scr
    default:
      return parseRss(config.origin)
  }
}