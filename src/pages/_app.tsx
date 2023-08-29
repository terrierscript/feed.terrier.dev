

import React from "react"
import { Layout } from "../components/layout/Layout"
import { ChakraProvider, StylesProvider } from '@chakra-ui/react'
import { customTheme } from "../lib/theme"

function MyApp({
  Component,
  pageProps
}: any) {
  // <CacheProvider value={cache}>
  return <ChakraProvider
    theme={customTheme}
  >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  // </CacheProvider>
}

export default MyApp
