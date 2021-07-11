

import React from "react"
import { Layout } from "../components/layout/Layout"
import { ChakraProvider, StylesProvider } from '@chakra-ui/react'

function MyApp({
  Component,
  pageProps
}: any) {
  // <CacheProvider value={cache}>
  return <ChakraProvider>
    <StylesProvider>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StylesProvider>
  </ChakraProvider>
  // </CacheProvider>
}

export default MyApp
