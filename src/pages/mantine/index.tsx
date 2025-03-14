import { Box } from '@mantine/core'
import { Portfolio } from '../../components/mantine/portfolio/Portfolio'
import { loadAllForSSR } from '../../lib/feed/loadAll'
import { GetServerSideProps } from 'next'
import { Feeds } from '../../components/mantine/feeds/Feed'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

export async function getStaticProps() {
  try {
    const random = Math.random()
    const feeds = await loadAllForSSR()
    // console.log(feeds)
    return { props: { feeds, random }, revalidate: 60 }
  } catch (e) {
    console.error(e)
    return { props: { feeds: [] }, revalidate: 60 }
  }
}

export default function MantinePage({ feeds }: { feeds: any[] }) {
  return (
    <MantineProvider defaultColorScheme="auto">
      <Box>
        <Portfolio />
        <Feeds initFeeds={feeds} />
      </Box>
    </MantineProvider>
  )
}
