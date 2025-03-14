"use client"
import { Box } from '@chakra-ui/react'
import { Feeds } from "../components/feeds/Feed"
import { Portfolio } from '../components/portfolio/Portfolio'
import { loadAllForSSR } from '../lib/feed/loadAll'

export default async function Home() {
  const feeds = await loadAllForSSR()

  return (
    <Box>
      <Portfolio />
      <Feeds initFeeds={feeds} />
    </Box>
  )
}
