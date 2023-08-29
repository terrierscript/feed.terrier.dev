import { Box, Center, HStack, Heading, Link } from "@chakra-ui/react"
import styled from "@emotion/styled"
import React from "react"
import { DogScrollDynamic } from "../../portfolio/Hero"
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
    <Box padding={4} justifyContent="center" textAlign="center" position="sticky" top={0} bg="white" zIndex={"sticky"}>
      <Center>
        <HStack>
          <DogScrollDynamic />
          <Logo>
            <Heading>terrier.dev</Heading>
          </Logo>
        </HStack>
      </Center>
    </Box>
  )
}
