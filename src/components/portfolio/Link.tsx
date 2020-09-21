import React, { useState } from "react"
import { List, ListItem, Link, LinkProps, Stack, SimpleGrid, Box, Flex } from "@chakra-ui/core"
import styled from "@emotion/styled"

const ListLink = (props: LinkProps) => {
  return (
    <ListItem fontSize={"sm"}>
      <Link {...props} />
    </ListItem>
  )
}

const ListLinkFirst = (props: LinkProps) => <ListItem fontSize={"sm"}>
  <Link {...props} color={"gray.700"} />
</ListItem>

const ListLinkSecond = (props: LinkProps) => <ListItem fontSize={"sm"}>
  <Link {...props} color={"gray.700"} />
</ListItem>


const MainRow = () => {
  return <>
    <ListLinkFirst href="https://twitter.com/terrierscript">Twitter</ListLinkFirst>
    <ListLinkFirst href="https://github.com/terrierscript">GitHub</ListLinkFirst>
    <ListLinkFirst href="https://zenn.dev/terrierscript">Zenn</ListLinkFirst>
    <ListLinkFirst href="https://note.mu/terrierscript/">note</ListLinkFirst>
  </>
}
const MoreRow = () => {
  const [show, setShow] = useState(false)
  if (!show) {
    return <Link onClick={() => setShow(true)} color={"gray.500"} >more..</Link>
  }
  return <>
    <ListLinkSecond href="https://blog.terrier.dev">Blog</ListLinkSecond>
    <ListLinkSecond href="https://scrapbox.io/terrierscript/">Scrapbox</ListLinkSecond>
    <ListLinkSecond href="https://www.notion.so/terrierscript/d9d2f56606d14e6f91703201a21e5cde">notion</ListLinkSecond>
    <ListLinkSecond href="https://dev.to/terrierscript">dev.to</ListLinkSecond>
    <ListLinkSecond href="https://www.npmjs.com/~inuscript">npm</ListLinkSecond>
    <ListLinkSecond href="https://qiita.com/terrierscript">Qiita</ListLinkSecond>
    <ListLinkSecond href="https://medium.com/inuscript/">Medium</ListLinkSecond>
  </>
}
export const Links = () => {
  return (
    <SimpleGrid spacing={1} >
      <MainRow />
      <MoreRow />
    </SimpleGrid >

  )
}

