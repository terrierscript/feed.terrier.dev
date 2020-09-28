

import { CacheProvider } from '@emotion/react'
// import { cache } from '@emotion/css'

import { CSSReset, Grid, ThemeProvider } from "@chakra-ui/core"
import React from "react"
import { Layout } from "../components/layout/Layout"

function MyApp({
  Component,
  pageProps
}: any) {
  // return <CacheProvider value={cache}>
  return <ThemeProvider>
    <CSSReset />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
  // </CacheProvider>
}

export default MyApp
