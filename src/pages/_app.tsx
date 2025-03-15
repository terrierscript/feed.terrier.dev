

import React from "react"
import { Layout } from "../components/layout/Layout"
import { MantineProvider, mantineHtmlProps } from '@mantine/core'
import { mantineTheme } from "../lib/mantineTheme"
import '@mantine/core/styles.css'
import '../styles/global.css'

function MyApp({
  Component,
  pageProps
}: any) {
  return (
    <MantineProvider {...mantineHtmlProps} theme={mantineTheme} defaultColorScheme="auto">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  )
}

export default MyApp
