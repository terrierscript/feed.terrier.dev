import Head from 'next/head'
import React from 'react'
import { Feeds } from "../components/Feed"
import { loadAllForSSR } from '../lib/feed/loadAll'

export async function getServerSideProps() {
  const feeds = await loadAllForSSR()
  return { props: { feeds } }
}

export default function Home({ props }: any) {
  const initFeeds = props?.data
  return (
    <div>
      <Feeds initFeeds={initFeeds} />
    </div>
  )
}
