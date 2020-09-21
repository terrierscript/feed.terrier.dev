import { Text, Avatar, Box, Flex, Grid, Stack, Heading } from "@chakra-ui/core"
import React from "react"
import { Hero } from "./Hero"
import { Links } from "./Link"

const avater =
  "https://ja.gravatar.com/userimage/90616865/8a8d3f96f2d0be4c04607273030e1e17.png"

const AvaterLinks = () => {
  return <Grid gap={4}
  // justifyContent="center"
  >
    <Stack isInline
      align="center"
    >
      <Avatar src={avater}></Avatar>
      <Box>
        <Heading size="md">@terrierscript</Heading>
      </Box>
    </Stack>
    <Heading size="md">Links</Heading>
    <Links />
  </Grid>

}
export const Portfolio = () => {
  return <Box py={8}>
    <Grid templateColumns={"1fr 1fr"} gap={8}>
      <Box justifyContent="center" alignContent="center" >
        <Hero />
      </Box>
      <Box>
        <AvaterLinks />
      </Box>
    </Grid >
  </Box>
}