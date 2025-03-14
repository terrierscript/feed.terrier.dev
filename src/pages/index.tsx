import { Box } from '@chakra-ui/react'
import React from 'react'
import { Feeds } from "../components/mantine/feeds/Feed"
import { Portfolio } from '../components/portfolio/Portfolio'
import { loadAllForSSR } from '../lib/feed/loadAll'

export async function getServerSideProps() {
  try {
    const feeds = await loadAllForSSR()
    return { props: { feeds } }
  } catch (e) {
    console.error(e)
    return { props: { feeds: [] } }
  }
}

export default function Home({ feeds }: { feeds: any[] }) {
  return (
    <Box>
      <Portfolio />
      <Feeds initFeeds={feeds} />
      {/* <div>{random}</div> */}
    </Box>
  )
}
