"use client"
import React from "react"
import { Layout } from "../components/layout/Layout"
import { MantineProvider, mantineHtmlProps } from '@mantine/core'
import { mantineTheme } from "../lib/mantineTheme"
import '@mantine/core/styles.css'
import '../styles/global.css'

export const metadata = {
  title: 'Feed | Terrier',
  description: 'Personal feed aggregator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <body>
        <MantineProvider theme={mantineTheme} defaultColorScheme="auto">
          <Layout>
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  )
}
