import { Config } from "../rssConfig"
import { parseRss } from "./parseRss"
import { parseScrapbox } from "./parseScrapbox"
import { parseZennRss } from "./parseZennRss"
import { parseZennScrapApi } from "./parseZennScrapApi"


export const parseMedia = async (config: Config) => {
  switch (config.id) {
    case "scrapbox":
      return parseScrapbox(config.origin)
    case "zenn":
      return parseZennRss(config.origin)
    case "zennScrap":
      const scr = await parseZennScrapApi(config.origin)
      // console.log({ scr })
      return scr
    default:
      return parseRss(config.origin)
  }
}