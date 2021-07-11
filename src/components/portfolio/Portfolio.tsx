import { Avatar, Box, Grid, Stack, Heading } from "@chakra-ui/react"
import React from "react"
import { Hero } from "./Hero"
import { Links } from "./Link"

const avater =
  "https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"

const AvaterLinks = () => {
  return <Grid gap={4}
  // justifyContent="center"
  >
    <Heading size="lg">About me</Heading>
    <Stack isInline
      align="center"
    >
      <Avatar src={avater} backgroundColor="white" />
      <Box>
        <Heading size="md">@terrierscript</Heading>
      </Box>
    </Stack>
    <Heading size="md">Links</Heading>
    <Links />
  </Grid>

}
export const Portfolio = () => {
  const size = `min(32vw, 240px)`
  return <Box py={8}>
    <Grid templateColumns={`${size} min(32vw, 240px)`} gap={8}
      alignItems="center"
      justifyContent="space-evenly"
      justifyItems="center"
    >
      <Grid
        alignSelf="center"
        templateColumns={size}
        autoRows={size}
        alignItems="center"
        justifyItems="center"
      >
        <Hero />
      </Grid>
      <Box>
        <AvaterLinks />
      </Box>
    </Grid >
  </Box>
}