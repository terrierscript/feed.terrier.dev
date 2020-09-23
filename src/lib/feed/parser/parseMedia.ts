import { Config } from "../rssConfig"
import { parseRss } from "./parseRss"
import { parseScrapbox } from "./parseScrapbox"
import { parseZenn } from "./parseZenn"
import { parseZennFromGit } from "./parseZennFromGithub"


export const parseMedia = (config: Config) => {
  switch (config.id) {
    case "scrapbox":
      return parseScrapbox(config.origin)
    case "zenn":
      return parseZennFromGit(config.origin)
    default:
      return parseRss(config.origin)
  }
}