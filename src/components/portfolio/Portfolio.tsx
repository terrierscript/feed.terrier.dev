"use client"
import { Avatar, Box, SimpleGrid, Stack, Group, Title } from "@mantine/core"
import React from "react"
import { Links } from "./Link"

const avater =
  "https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"

const AvaterItem = () => {
  return <Group>
    <Avatar src={avater} bg="white" />
    <Box>
      <Title order={3}>@terrierscript</Title>
    </Box>
  </Group>
}

const AvaterLinks = () => {
  return <Stack gap="md">
    <Title order={2}>About me</Title>
    <AvaterItem />
    <Title order={3}>Links</Title>
    <Links />
  </Stack>
}

export const Portfolio = () => {
  const size = `min(32vw, 240px)`
  return <Box py="lg">
    <SimpleGrid cols={2} spacing="lg"
      style={{
        maxWidth: `calc(${size} * 2)`,
        margin: '0 auto'
      }}
    >
      <Stack>
        <Title order={3}>About me</Title>
        <AvaterItem />
      </Stack>
      <Stack>
        <Title order={3}>Links</Title>
        <Links />
      </Stack>
    </SimpleGrid>
    <Box>
      <Box p="sm" fz="sm">仕事依頼・ご相談等についてございましたらTwitterのDMまでご連絡ください</Box>
    </Box>
  </Box>
}
