"use client"
import { Text, Badge, Box, Stack, Flex, Anchor, Timeline } from "@mantine/core"
import React, { FC, useMemo } from "react"
import { Item } from "rss-parser"
import { getConfigByMedia } from "../../../lib/feed/rssConfig"

const MediaBadge: FC<{ mediaId: string }> = ({ mediaId: media }) => {
  const config = getConfigByMedia(media)
  return <Badge
    radius="md"
    style={{ maxWidth: "8rem" }}
    px="md"
    ta="center"
    c={config?.color === "white" ? "dark.9" : config?.color ?? "dark.9"}
    bg={config?.bgColor ?? "gray.2"}
  >
    {config?.media}
  </Badge >
}

export const DateTime: FC<{ datetime: number, media: string }> = ({ datetime, media }) => {
  const date = new Date(datetime)
  const config = getConfigByMedia(media)
  return <Badge maw={100} fw="normal" c={config?.color === "white" ? "dark.9" : config?.color ?? "dark.9"} bg={config?.bgColor ?? "gray.2"}>
    {date.toLocaleDateString("sv-SE")}
  </Badge>
}

export const DateTime2: FC<{ datetime: number }> = ({ datetime }) => {
  const date = new Date(datetime)
  return <Box fz="xs" fw="normal">
    {date.toLocaleDateString("sv-SE")}
  </Box>
}

const FeedItem: FC<{ feed: Item }> = ({ feed }) => {
  const config = getConfigByMedia(feed.mediaId)
  const fontWeight = useMemo(() => config?.priority !== "low" ? "bold" : "normal", [config])
  const fontSize = useMemo(() => config?.priority !== "low" ? "lg" : "sm", [config])

  return <Stack p="md">
    <Box>
      <Anchor href={feed.link}>
        <Text fw={fontWeight} fz={fontSize}>
          {feed.title}
        </Text>
      </Anchor>
    </Box>
  </Stack>
}

export const FeedGridItem: FC<{ feed: Item }> = ({ feed }) => {
  const config = getConfigByMedia(feed.mediaId)
  return (
    <Timeline.Item
      bullet={
        <Box style={{
          borderRadius: "50%",
          backgroundColor: config?.bgColor ?? "gray.2",
          width: "100%",
          height: "100%"
        }} />
      }
      title={<Stack gap="xs">
        <Flex gap="sm">
          <DateTime datetime={feed.datetime} media={feed.mediaId} />
          <MediaBadge mediaId={feed.mediaId} />
        </Flex>
      </Stack>}
    >
      <FeedItem feed={feed} />
    </Timeline.Item>
  )
}
