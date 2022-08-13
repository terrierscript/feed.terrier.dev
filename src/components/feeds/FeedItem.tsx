import { Text, Badge, Box, Link, Flex, HStack, Stack, Divider, Grid, VStack } from "@chakra-ui/react"
import React, { FC, useMemo } from "react"
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

export const DateTime: FC<{ datetime: number }> = ({ datetime }) => {
  const date = new Date(datetime)
  return <Badge width={"5rem"} fontWeight="normal">
    {date.toLocaleDateString("sv-SE")}
  </Badge>
}

export const DateTime2: FC<{ datetime: number }> = ({ datetime }) => {
  const date = new Date(datetime)
  return <Box fontSize="xs" fontWeight="normal">
    {date.toLocaleDateString("sv-SE")}
  </Box>
}


const FeedItem: FC<{ feed: Item }> = ({ feed }) => {
  const config = getConfigByMedia(feed.mediaId)
  const fontWeight = useMemo(() => config?.priority !== "low" ? "bold" : "normal", [config])
  const fontSize = useMemo(() => config?.priority !== "low" ? "lg" : "sm", [config])
  return <Stack p={4} >
    <Flex style={{ gap: 4 }} py={2}>
      {/* <DateTime datetime={feed.datetime} /> */}
      <MediaBadge mediaId={feed.mediaId} />
    </Flex>
    <Box>
      <Link href={feed.link}>
        <Text fontWeight={fontWeight} fontSize={fontSize}>
          {feed.title}
        </Text>
      </Link>
    </Box>
  </Stack >
}


export const FeedGridItem: FC<{ feed: Item, isFirstItem: boolean }> = ({ feed, isFirstItem }) => {
  const lineWidth = 1
  return <Grid gridAutoFlow="column" gridTemplateColumns="1fr 10fr" gap={0}>
    <VStack w="100px" gap={0} >
      <Divider orientation="vertical" borderWidth={isFirstItem ? 0 : lineWidth} />
      <DateTime2 datetime={feed.datetime} />
      <Divider orientation="vertical" borderWidth={lineWidth} />
    </VStack>
    <Box p={2}>
      <FeedItem feed={feed} />
    </Box>
  </Grid>
}