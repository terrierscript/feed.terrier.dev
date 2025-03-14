"use client"
import React, { useState } from "react"
import { List, Anchor, Stack, Text } from "@mantine/core"

interface ListLinkProps {
  href: string
  children: React.ReactNode
}

const ListLink = ({ href, children }: ListLinkProps) => {
  return (
    <List.Item>
      <Text size="sm">
        <Anchor href={href}>{children}</Anchor>
      </Text>
    </List.Item>
  )
}

const ListLinkFirst = ({ href, children }: ListLinkProps) => (
  <List.Item>
    <Text size="sm">
      <Anchor href={href} c="gray.7">{children}</Anchor>
    </Text>
  </List.Item>
)

const ListLinkSecond = ({ href, children }: ListLinkProps) => (
  <List.Item>
    <Text size="sm">
      <Anchor href={href}>{children}</Anchor>
    </Text>
  </List.Item>
)

const MainRow = () => {
  return <List>
    <ListLinkFirst href="https://twitter.com/terrierscript">Twitter</ListLinkFirst>
    <ListLinkFirst href="https://github.com/terrierscript">GitHub</ListLinkFirst>
    <ListLinkFirst href="https://zenn.dev/terrierscript">Zenn</ListLinkFirst>
    <ListLinkFirst href="https://note.mu/terrierscript/">note</ListLinkFirst>
  </List>
}

const MoreRow = () => {
  const [show, setShow] = useState(false)
  if (!show) {
    return <Anchor onClick={() => setShow(true)} c="gray.5">more..</Anchor>
  }
  return <List>
    <ListLinkSecond href="https://blog.terrier.dev">Blog</ListLinkSecond>
    <ListLinkSecond href="https://scrapbox.io/terrierscript/">Scrapbox</ListLinkSecond>
    <ListLinkSecond href="https://www.notion.so/terrierscript/d9d2f56606d14e6f91703201a21e5cde">notion</ListLinkSecond>
    <ListLinkSecond href="https://dev.to/terrierscript">dev.to</ListLinkSecond>
    <ListLinkSecond href="https://www.npmjs.com/~inuscript">npm</ListLinkSecond>
    <ListLinkSecond href="https://qiita.com/terrierscript">Qiita</ListLinkSecond>
    <ListLinkSecond href="https://medium.com/inuscript/">Medium</ListLinkSecond>
  </List>
}

export const Links = () => {
  return (
    <Stack gap="xs">
      <MainRow />
      <MoreRow />
    </Stack>
  )
}
