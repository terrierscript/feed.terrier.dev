import React, { FC, useEffect, useState } from "react"
import { Item } from "rss-parser"
import { useFeed, useFeedAll } from "./useFeed"
import { LoadFeeds } from "./LoadFeed"

const Feed: FC<{feed: Item}> = ({feed}) => {
  return <div>
    <a href={feed.link}>
      {feed.title}
    </a>
  </div>
}

export const Feeds: FC<{ initFeeds: Item[] }> = ({ initFeeds }: any) => {
  // const [feeds, setFeeds] = useState<Item[]>(initFeeds ?? [])
  const {data} = useFeedAll(initFeeds)
  useEffect(() => {
    // setFeeds()
  },[data])
  if(!data){
    return <div>loading</div>
  }
  return <div>
    {data.map((d,i) => <div key={i}>
      <Feed feed={d}/>
    </div>)}
  </div>
}