import React, { FC, useEffect, useState } from "react"
import { Item } from "rss-parser"
import { useFeed, useFeedAll } from "./useFeed"
import { LoadFeeds } from "./LoadFeed"

const Feed: FC<{feed: Item}> = ({feed}) => {
  return 
}

export const Feeds: FC<{ initFeeds: Item[] }> = ({ initFeeds }: any) => {
  const [feeds, setFeeds] = useState<Item[]>(initFeeds ?? [])
  const {data} = useFeedAll()
  useEffect(() => {
    // setFeeds()
  },[data])
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