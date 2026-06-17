import React from 'react'
import { Feeds } from "../components/feeds/Feed"
import { Portfolio } from '../components/portfolio/Portfolio'
import { Box } from '@mantine/core'
import { FeedItemForSSR, loadAllForSSR } from '../lib/feed/loadAll'

export default async function Home() {
  let feeds: FeedItemForSSR[] = []
  try {
    feeds = await loadAllForSSR()
  } catch (e) {
    console.error(e)
  }

  return (
    <Box>
      <Portfolio />
      <Feeds initFeeds={feeds} />
      {/* <div>{random}</div> */}
    </Box>
  )
}
