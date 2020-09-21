import { Config } from "../rssConfig"
import { parseRss } from "./parseRss"
import { parseScrapbox } from "./parseScrapbox"


export const parseMedia = (config: Config) => {
  switch (config.id) {
    case "scrapbox":
      return parseScrapbox(config.origin)
    default:
      return parseRss(config.origin)
  }
}