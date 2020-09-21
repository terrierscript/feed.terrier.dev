import { Text, Badge, Box, Tag, Link, Flex, Grid, Stack, useTheme } from "@chakra-ui/core"
import React, { FC, useEffect } from "react"
import { Item } from "rss-parser"
import { getConfigByMedia } from "../lib/feed/rssConfig"
import { useFeedAll } from "./useFeed"

const MediaBadge: FC<{ mediaId: string }> = ({ mediaId: media }) => {
  const config = getConfigByMedia(media)
  return <Box>
    <Badge borderRadius={8} width={"5rem"} textAlign="center" color={config?.color ?? "white"} backgroundColor={config?.bgColor ?? "black"}> {config?.media}</Badge>
  </Box>
}
const Feed: FC<{ feed: Item }> = ({ feed }) => {
  const theme = useTheme()
  return <Box borderWidth={1} borderRadius={4} backgroundColor={"gray.100"} padding={4}>
    <Grid templateColumns="auto 1fr" gap={2}>
      <MediaBadge mediaId={feed.mediaId} />
      <Link href={feed.link}>
        <Text fontWeight="bold">
          {feed.title}
        </Text>
      </Link>
    </Grid>
  </Box>
}

export const Feeds: FC<{ initFeeds: Item[] }> = ({ initFeeds }: any) => {
  // const [feeds, setFeeds] = useState<Item[]>(initFeeds ?? [])
  const { data } = useFeedAll(initFeeds)
  useEffect(() => {
    // setFeeds()
  }, [data])
  if (!data) {
    return <div>loading</div>
  }
  return <Stack spacing={4}>
    {data.map((d, i) => <Box key={i}>
      <Feed feed={d} />
    </Box>)}
  </Stack>
}