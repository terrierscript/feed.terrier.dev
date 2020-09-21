
import { CSSReset, Grid, ThemeProvider } from "@chakra-ui/core"
import React from "react"
import { Layout } from "../components/layout/Layout"

function MyApp({
  Component,
  pageProps
}: any) {
  return <ThemeProvider>
    <CSSReset />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
}

export default MyApp
