import { Box, Heading, Grid, Link, Stack } from "@chakra-ui/core"
import styled from "@emotion/styled"
import React from "react"
import { Dog } from "./Dog"
export const TITLE_BOLD_COLOR = "#111"

export const impactFont = "Quicksand"


const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${impactFont};
  font-size: 1.5em;
  color: ${TITLE_BOLD_COLOR};
`

export const Header = () => {
  return (
    <Box padding={4} justifyContent="center" textAlign="center">
      <Heading>terrier.dev</Heading>
    </Box>
  )
}
