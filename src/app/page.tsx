import React from 'react'
import { Feeds } from "../components/feeds/Feed"
import { Portfolio } from '../components/portfolio/Portfolio'
import { Box } from '@mantine/core'
import { loadAllForSSR } from '../lib/feed/loadAll'

export default async function Home() {
  let feeds: any[] = []
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
