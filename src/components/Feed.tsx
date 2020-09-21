import { Text, Badge, Box, Tag, Link, Flex, Grid, Stack, useTheme } from "@chakra-ui/core"
import React, { FC, useEffect } from "react"
import { Item } from "rss-parser"
import { getConfigByMedia } from "../lib/feed/rssConfig"
import { useFeedAll } from "./useFeed"

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
  return <Badge width={"5rem"}>
    {date.toLocaleDateString("ja-JP")}
  </Badge>

}

const Feed: FC<{ feed: Item }> = ({ feed }) => {
  return <Box borderWidth={1} borderRadius={4} backgroundColor={"gray.100"} padding={4}>
    <Box >
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