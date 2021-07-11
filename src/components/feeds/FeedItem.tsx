import { Text, Badge, Box, Link, Flex, HStack, Stack } from "@chakra-ui/react"
import React, { FC } from "react"
import { Item } from "rss-parser"
import { getConfigByMedia } from "../../lib/feed/rssConfig"

const MediaBadge: FC<{ mediaId: string }> = ({ mediaId: media }) => {
  const config = getConfigByMedia(media)
  return <Badge
    borderRadius={8}
    maxWidth={"8rem"}
    px={"1rem"}
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


const DefaultFeedItem: FC<{ feed: Item }> = ({ feed }) => {
  return <Box>
    <Stack>
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
    </Stack>
  </Box>
}
const LowPriorityFeedItem: FC<{ feed: Item }> = ({ feed }) => {
  return <Box>
    <Stack>
      <Flex style={{ gap: 4 }} py={2}>
        <DateTime datetime={feed.datetime} />
        <MediaBadge mediaId={feed.mediaId} />
      </Flex>
      <Box>
        <Link href={feed.link}>
          <Text>
            {feed.title}
          </Text>
        </Link>
      </Box>
    </Stack>
  </Box>
}

export const FeedItem: FC<{ feed: Item }> = ({ feed }) => {
  const config = getConfigByMedia(feed.mediaId)

  if (config?.priority === "low") {
    return <LowPriorityFeedItem feed={feed} />
  }
  return <DefaultFeedItem feed={feed} />
}
