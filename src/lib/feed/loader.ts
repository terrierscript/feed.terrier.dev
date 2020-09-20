import { useState } from "react"
import useSWR from "swr"
import { parseRss } from "./parseRss"
import { Config } from "./rssConfig"

const mediaProxyUrl = (id: string) => `/api/feed/${id}`
const getUrl = (id: string) => {

}

const loadAll = () => {
  // rssConfig.map(config => {
  //   switch (config.id) {
  //     case "scrapbox":
  //       const url = mediaProxyUrl(api) getUrl(config, "api")
  //       return fromApi(url, config)
  //     default: {
  //       const url = getUrl(config, "origin")
  //       if (url !== null) {
  //         return fromRss(url, config)
  //       } else {
  //         return empty()
  //       }
  //     }
  //   }
  // })
}


export const useFeed = (site: Config) => {
  const url = mediaProxyUrl(site.id)
  return useSWR(url, () => {
    const r = parseRss(url)
    return r
    //   .then(r => {
    //   const z = await r
    //   return z
    // })
  }, {
    revalidateOnMount: true
  })
  // return result
}


