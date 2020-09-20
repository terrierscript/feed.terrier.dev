import React, { useState } from "react"
import { Item } from "rss-parser"
import { useFeed } from "../lib/feed/loader"
import { LoadFeeds } from "./LoadFeed"



export const Feeds = () => {
  const [feeds, setFeeds] = useState<Item[]>([])

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