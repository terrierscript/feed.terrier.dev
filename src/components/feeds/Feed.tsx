import { Box, Stack, Button, Heading, SimpleGrid } from "@chakra-ui/react"
import React, { FC, useState } from "react"
import { Item } from "rss-parser"
import useSWR from "swr"
import { getConfigByMedia } from "../../lib/feed/rssConfig"
import { FeedGridItem } from "./FeedItem"

export const useFeedAll = (initFeeds: Item[]) => {
  return useSWR(`/api/feed`, {
    initialData: initFeeds
  })
}


const Circle: FC<{ mediaId: string }> = ({ mediaId }) => {
  const media = getConfigByMedia(mediaId)
  const size = media?.priority === "low" ? 4 : 6
  const padding = media?.priority === "low" ? 2 : 0
  return <Box borderRadius={"50%"} h={size} w={size} p={padding}
    bg={media?.bgColor}
  />
}




export const Feeds: FC<{ initFeeds: Item[] }> = ({ initFeeds }) => {
  // const [feeds, setFeeds] = useState<Item[]>(initFeeds ?? [])
  const { data } = useFeedAll(initFeeds)
  const [showFeedNum, setShowFeedsNum] = useState(20)
  const showMore = () => {
    setShowFeedsNum(s => s + 10)
  }
  if (!data) {
    return <div>loading</div>
  }

  return <Stack spacing={4}>
    <Heading>Recent Posts</Heading>
    <SimpleGrid spacing={4} >
      <Stack spacing={0}>
        {data.slice(0, showFeedNum).map((d, i) => (
          <FeedGridItem key={i} feed={d} isFirstItem={i === 0} />
        ))}
      </Stack>
      <Button onClick={() => showMore()}>Show more</Button>
    </SimpleGrid>
  </Stack >
}