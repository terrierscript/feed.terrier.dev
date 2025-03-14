import { Box, MantineProvider } from '@mantine/core'
import { mantineTheme } from '../../lib/mantineTheme'
import { Portfolio } from '../../components/mantine/portfolio/Portfolio'
import { loadAllForSSR } from '../../lib/feed/loadAll'
import { GetServerSideProps } from 'next'
import { Feeds } from '../../components/mantine/feeds/Feed'
import '@mantine/core/styles.css'

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const feeds = await loadAllForSSR()
    return {
      props: {
        feeds
      }
    }
  } catch (e) {
    console.error(e)
    return {
      props: {
        feeds: []
      }
    }
  }
}

export default function MantinePage({ feeds }: { feeds: any[] }) {
  return (
    <MantineProvider theme={mantineTheme} defaultColorScheme="auto">
      <Box>
        <Portfolio />
        <Feeds initFeeds={feeds} />
      </Box>
    </MantineProvider>
  )
}
