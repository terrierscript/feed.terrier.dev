import { Box, Heading, Grid, Link, Stack } from "@chakra-ui/core"
import styled from "@emotion/styled"
import React from "react"
import { Terrier } from "./Terrier"
export const TITLE_BOLD_COLOR = "#111"

export const impactFont = "Quicksand"


const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${impactFont};
  font-size: 1.5em;
  color: ${TITLE_BOLD_COLOR};
`

export const HeaderBar = () => {
  return (
    <Box padding={4} >
      <Logo href="/">
        <Stack isInline spacing={4} >
          <Box>
            <Terrier />
          </Box>
          <Box>
            <Heading>terrier.dev</Heading>
          </Box>
        </Stack>
      </Logo>
    </Box>
  )
}
