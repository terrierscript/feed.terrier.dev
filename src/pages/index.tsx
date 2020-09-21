import { Box } from '@chakra-ui/core'
import Head from 'next/head'
import React from 'react'
import { Feeds } from "../components/feeds/Feed"
import { Portfolio } from '../components/portfolio/Portfolio'
import { loadAllForSSR } from '../lib/feed/loadAll'

export async function getServerSideProps() {
  const feeds = await loadAllForSSR()
  console.log(feeds)
  return { props: { feeds } }
}

export default function Home({ feeds }: any) {
  return (
    <Box>
      <Portfolio />
      <Feeds initFeeds={feeds} />
    </Box>
  )
}
