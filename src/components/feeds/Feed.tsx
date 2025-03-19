"use client"
import { Box, Stack, Button, Title, Timeline } from "@mantine/core"
import { FC, useState } from "react"
import { Item } from "rss-parser"
import { useFeedAll } from "../../lib/feed/useFeedAll"
import { getConfigByMedia } from "../../lib/feed/rssConfig"
import { FeedGridItem } from "./FeedItem"

const Circle: FC<{ mediaId: string }> = ({ mediaId }) => {
  const media = getConfigByMedia(mediaId)
  const size = media?.priority === "low" ? 16 : 24 // Mantineはpxベースなのでサイズを調整
  const padding = media?.priority === "low" ? 8 : 0
  return <Box style={{
    borderRadius: "50%",
    height: size,
    width: size,
    padding,
    backgroundColor: media?.bgColor
  }} />
}

export const Feeds: FC<{ initFeeds: Item[] }> = ({ initFeeds }) => {
  console.log("FD")
  const { feeds, isLoading } = useFeedAll()
  const [showFeedNum, setShowFeedsNum] = useState(20)
  const showMore = () => {
    setShowFeedsNum(s => s + 10)
  }
  if (isLoading) {
    return <div>loading</div>
  }

  return <Stack gap="md">
    <Title order={2}>Recent Posts</Title>
    <Timeline active={showFeedNum} bulletSize={24} lineWidth={2}>
      {feeds.slice(0, showFeedNum).map((d, i) => (
        <FeedGridItem key={i} feed={d} />
      ))}
    </Timeline>
    <Button onClick={() => showMore()}>Show more</Button>
  </Stack>
}
