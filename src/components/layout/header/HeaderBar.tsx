import { Box, Center, HStack, Heading, Link, keyframes } from "@chakra-ui/react"
import styled from "@emotion/styled"
import React from "react"
import { DogScrollDynamic } from "../../portfolio/Hero"
import Head from "next/head"
export const TITLE_BOLD_COLOR = "#111"

export const impactFont = "Quicksand"


const Logo = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-family: ${impactFont};
  color: ${TITLE_BOLD_COLOR};
`

const logoAnimation = keyframes`
  0% { font-size: 3.5em; color: black; padding-left:16px; }
  10% {  font-size: 2em ; color: #333; padding-left:0px;}
  100% {  font-size: 2em ; color: #333  padding-left:0px;}
`

const blockAnimation = keyframes`
0% { padding-bottom: 20px; }
10% { padding-bottom: ４0px;}

`

export const Header = () => {
  return (
    <Box p={4} justifyContent="center" textAlign="center" position="sticky" top={0} zIndex={"sticky"}
      h="100%"
      bg={
        "linear-gradient(#ffff 25%, #fff9 75%, #fff0 100%)"
      }
      backdropFilter={"auto"}
      backdropBlur={"6px"}
      sx={{
        "mask-image": "linear-gradient(#000f 0%, #000f 75%, #0003 90%)",
        "animation-timing-function": "linear",
        "animation duration": "1ms",
        "animation-name": `${blockAnimation.name} `,
        "animation-timeline": "--page-scroll"
      }}>

      <Head>
        <style>
          {logoAnimation.styles}
          {blockAnimation.styles}
        </style>
      </Head>
      <Center>
        <HStack >
          <DogScrollDynamic />
          <Box
          >
            <Logo>
              <Heading
                sx={{
                  "animation-timing-function": "linear",
                  "animation-name": `${logoAnimation.name} `,
                  "animation-timeline": "--page-scroll"
                }}>terrier.dev</Heading>
            </Logo>
          </Box>
        </HStack>
      </Center>
    </Box>
  )
}
