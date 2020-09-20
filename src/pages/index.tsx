import Head from 'next/head'
// @ts-expect-error ts-migrate(1259) FIXME: Module '"/Users/inuscript/github/terrier.dev-strea... Remove this comment to see the full error message
import React from 'react'
import { Feeds } from "../components/Feed"
export default function Home() {
  return (
    <div>
      <Feeds />
    </div>
  )
}
