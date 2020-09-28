

import { CacheProvider } from '@emotion/core'
import { cache } from 'emotion'

import { CSSReset, Grid, ThemeProvider } from "@chakra-ui/core"
import React from "react"
import { Layout } from "../components/layout/Layout"

function MyApp({
  Component,
  pageProps
}: any) {
  return <CacheProvider value={cache}>
    <ThemeProvider>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </CacheProvider>
}

export default MyApp
