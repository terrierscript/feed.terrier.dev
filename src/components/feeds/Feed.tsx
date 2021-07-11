import { Box, Tag, Grid, Stack, useTheme, Button, Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import React, { FC, useEffect, useState } from "react"
import { Item } from "rss-parser"
import useSWR from "swr"
import { chunk } from "../chunk"
import { FeedItem } from "./MediaBadge"

export const useFeedAll = (initFeeds: Item[]) => {
  return useSWR(`/api/feed`, {
    initialData: initFeeds
  })
}

export const Feeds: FC<{ initFeeds: Item[] }> = ({ initFeeds }) => {
  // const [feeds, setFeeds] = useState<Item[]>(initFeeds ?? [])
  const { data } = useFeedAll(initFeeds)
  const [showFeedNum, setShowFeedsNum] = useState(10)
  const showMore = () => {
    setShowFeedsNum(s => s + 10)
  }
  if (!data) {
    return <div>loading</div>
  }

  return <Stack spacing={4}>
    <Heading>Recent Posts</Heading>
    <SimpleGrid spacing={4} >
      {data.slice(0, showFeedNum).map((d, i) => (
        <Box key={i}>
          <FeedItem feed={d} />
          {i % 10 == 9 && <Divider />}
        </Box>
      ))}
      <Button onClick={() => showMore()}>Show more</Button>
    </SimpleGrid>
  </Stack>
}