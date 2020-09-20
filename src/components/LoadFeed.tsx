import { FC, useEffect } from "react"
import { Item } from "rss-parser"
import { Config, rssConfig } from "../lib/feed/rssConfig"
import { useFeed } from "../lib/feed/loader"



export const LoadFeed: FC<{ site: Config; onLoad: (data: Item[]) => void }> = ({ site, onLoad }) => {
  const { data } = useFeed(site)
  useEffect(() => {
    if (!data) {
      return
    }
    onLoad(data)
  }, [data])
  return null
}

export const LoadFeeds: FC<{ onLoadFeed: (item: Item[]) => void }> = ({ onLoadFeed }) => {

  return <>{rssConfig.map(cnf => {
    return <LoadFeed site={cnf} onLoad={(item) => {
      onLoadFeed(item)
    }} />
  })}</>
}
