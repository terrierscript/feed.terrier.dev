import React from "react"
import { Layout } from "../components/layout/Layout"
import { MantineProvider, mantineHtmlProps } from '@mantine/core'
import { mantineTheme } from "../lib/mantineTheme"
import '@mantine/core/styles.css'
import '../styles/global.css'

export const metadata = {
  title: 'terrier.dev',
  description: 'about @terrierscript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" {...mantineHtmlProps}>
      <body>
        <MantineProvider theme={mantineTheme} defaultColorScheme="light">
          <Layout>
            {children}
          </Layout>
        </MantineProvider>
      </body>
    </html>
  )
}
