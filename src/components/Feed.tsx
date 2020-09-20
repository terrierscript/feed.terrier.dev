import React, { FC, useState } from "react"
import { Item } from "rss-parser"
import { useFeed } from "./useFeed"
import { LoadFeeds } from "./LoadFeed"

const useFeedState = () => {

}
export const Feeds: FC<{ initFeeds: Item[] }> = ({ initFeeds }: any) => {
  const [feeds, setFeeds] = useState<Item[]>(initFeeds ?? [])

  return <div>
    <LoadFeeds onLoadFeed={(item) => {
      setFeeds(f => [...f, ...item])
    }} />
    {feeds.map(d => <div><a href={d.link}>
      {d.title}
    </a>
    </div>)}
  </div>
}