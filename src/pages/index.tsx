import Head from 'next/head'
import React from 'react'
import { Feeds } from "../components/feeds/Feed"
import { loadAllForSSR } from '../lib/feed/loadAll'

export async function getServerSideProps() {
  const feeds = await loadAllForSSR()
  console.log(feeds)
  return { props: { feeds } }
}



export default function Home({ feeds }: any) {
  return (
    <div>
      <Feeds initFeeds={feeds} />
    </div>
  )
}
