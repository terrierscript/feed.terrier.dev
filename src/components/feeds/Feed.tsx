import { Text, Badge, Box, Tag, Link, Flex, Grid, Stack, useTheme, Button, Divider, Heading, SimpleGrid } from "@chakra-ui/core"
import React, { FC, useEffect, useState } from "react"
import { Item } from "rss-parser"
import useSWR from "swr"
import { getConfigByMedia } from "../../lib/feed/rssConfig"
import { chunk } from "../chunk"

export const useFeedAll = (initFeeds: Item[]) => {
  return useSWR(`/api/feed`, {
    initialData: initFeeds
  })
}

const MediaBadge: FC<{ mediaId: string }> = ({ mediaId: media }) => {
  const config = getConfigByMedia(media)
  return <Badge
    borderRadius={8}
    width={"5rem"}
    textAlign="center"
    color={config?.color ?? "white"}
    backgroundColor={config?.bgColor ?? "black"}>
    {config?.media}
  </Badge>
}

const DateTime: FC<{ datetime: number }> = ({ datetime }) => {
  const date = new Date(datetime)
  return <Badge width={"5rem"} fontWeight="normal">
    {date.toLocaleDateString("sv-SE")}
  </Badge>

}

const Feed: FC<{ feed: Item }> = ({ feed }) => {
  return <Box borderWidth={1} borderRadius={4} backgroundColor={"gray.100"} padding={4}>
    <Box>
      <Flex style={{ gap: 4 }} py={2}>
        <DateTime datetime={feed.datetime} />
        <MediaBadge mediaId={feed.mediaId} />
      </Flex>
      <Box>
        <Link href={feed.link}>
          <Text fontWeight="bold">
            {feed.title}
          </Text>
        </Link>
      </Box>
    </Box>
  </Box>
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
          <Feed feed={d} />
          {i % 10 == 9 && <Divider />}
        </Box>
      ))}
      <Button onClick={() => showMore()}>Show more</Button>
    </SimpleGrid>
  </Stack>
}