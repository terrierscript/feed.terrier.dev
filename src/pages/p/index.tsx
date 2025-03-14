import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Feeds } from "../../components/feeds/Feed"
import { Portfolio } from '../../components/portfolio/Portfolio'
import { loadAllForSSR } from '../../lib/feed/loadAll'

// @ts-ignore
export function reportWebVitals(metric) {
  console.log(metric)
}

export async function getStaticProps() {
  try {
    const random = Math.random()
    const feeds = await loadAllForSSR()
    return { props: { feeds, random }, revalidate: 60 }
  } catch (e) {
    console.error(e)
    return { props: { feeds: [] }, revalidate: 60 }
  }
}

export default function Home({ feeds, random }: any) {
  return (
    <Box>
      <Portfolio />
      <Feeds initFeeds={feeds} />
    </Box>
  )
}
