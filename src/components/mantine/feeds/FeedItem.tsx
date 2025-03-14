"use client"
import { Text, Badge, Box, Stack, Divider, Grid, Flex, Anchor } from "@mantine/core"
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
    color={config?.color ?? "white"}
    bg={config?.bgColor ?? "black"}>
    {config?.media}
  </Badge>
}

export const DateTime: FC<{ datetime: number }> = ({ datetime }) => {
  const date = new Date(datetime)
  return <Badge w="5rem" fw="normal">
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
    <Flex gap="sm" py="sm">
      <MediaBadge mediaId={feed.mediaId} />
    </Flex>
    <Box>
      <Anchor href={feed.link}>
        <Text fw={fontWeight} fz={fontSize}>
          {feed.title}
        </Text>
      </Anchor>
    </Box>
  </Stack>
}

export const FeedGridItem: FC<{ feed: Item, isFirstItem: boolean }> = ({ feed, isFirstItem }) => {
  const lineWidth = "1px"
  return <Grid columns={11}>
    <Grid.Col span={1}>
      <Stack gap={0} w={100}>
        <Divider orientation="vertical" size={isFirstItem ? 0 : lineWidth} />
        <DateTime2 datetime={feed.datetime} />
        <Divider orientation="vertical" size={lineWidth} />
      </Stack>
    </Grid.Col>
    <Grid.Col span={10}>
      <Box p="sm">
        <FeedItem feed={feed} />
      </Box>
    </Grid.Col>
  </Grid>
}
