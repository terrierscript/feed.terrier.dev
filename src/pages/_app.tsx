

import React from "react"
import { Layout } from "../components/layout/Layout"
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core'
import { customTheme } from "../lib/theme"
import { mantineTheme } from "../lib/mantineTheme"
import '@mantine/core/styles.css'

function MyApp({
  Component,
  pageProps
}: any) {
  return (
    <ChakraProvider theme={customTheme}>
      <MantineProvider theme={mantineTheme} defaultColorScheme="auto">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </ChakraProvider>
  )
}

export default MyApp
