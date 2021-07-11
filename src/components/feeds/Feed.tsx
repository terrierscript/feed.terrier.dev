import { Box, Stack, Button, Divider, Heading, SimpleGrid, HStack, VStack, chakra, Avatar, Grid } from "@chakra-ui/react"
import React, { FC, useState } from "react"
import { Item } from "rss-parser"
import useSWR from "swr"
import { getConfigByMedia } from "../../lib/feed/rssConfig"
import { FeedItem } from "./FeedItem"

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
          <Grid gridAutoFlow="column" gridTemplateColumns="1fr 10fr" key={i}>
            <VStack w="100px" gap={0} >
              <Divider orientation="vertical" maxHeight={"20%"} borderWidth={2} />
              <Circle mediaId={d.mediaId} />
              <Divider orientation="vertical" maxHeight={"20%"} borderWidth={2} />
            </VStack>
            <Box px={4}>
              <FeedItem feed={d} />
              {i % 10 == 9 && <Divider />}
            </Box>
          </Grid>
        ))}
      </Stack>
      <Button onClick={() => showMore()}>Show more</Button>
    </SimpleGrid>
  </Stack>
}