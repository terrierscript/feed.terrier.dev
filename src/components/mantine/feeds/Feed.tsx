"use client"
import { Box, Stack, Button, SimpleGrid, Title } from "@mantine/core"
import React, { FC, useState } from "react"
import { Item } from "rss-parser"
import useSWRImmutable from "swr/immutable"
import { getConfigByMedia } from "../../../lib/feed/rssConfig"
import { FeedGridItem } from "./FeedItem"

const fetcher = (url: string) => fetch(url).then(r => r.json())
export const useFeedAll = (initFeeds: Item[]) => {
  return useSWRImmutable<Item[]>(`/api/feed`, fetcher, {
    fallbackData: initFeeds
  })
}

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
  const { data } = useFeedAll(initFeeds)
  const [showFeedNum, setShowFeedsNum] = useState(20)
  const showMore = () => {
    setShowFeedsNum(s => s + 10)
  }
  if (!data) {
    return <div>loading</div>
  }

  return <Stack gap="md">
    <Title order={2}>Recent Posts</Title>
    <SimpleGrid cols={1}>
      <Stack gap={0}>
        {data.slice(0, showFeedNum).map((d, i) => (
          <FeedGridItem key={i} feed={d} isFirstItem={i === 0} />
        ))}
      </Stack>
      <Button onClick={() => showMore()}>Show more</Button>
    </SimpleGrid>
  </Stack>
}
