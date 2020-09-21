import React, { FC } from "react"
// @ts-ignore
import pretty from "./pretty.jpg"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { Avatar, AvatarBadge, Box } from "@chakra-ui/core"
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const Img = styled(Avatar)`
  vertical-align: middle;
  animation: ${rotate360} 6s linear infinite;
  animation-play-state: paused;
  :hover {
    animation-play-state: running;
  }
`

const Dog: FC<any> = () => <Img src={pretty} alt="🐶" />

const Container = styled.div`
  display: inline-block;
  margin-right: 0.2em;
`
export const Terrier = () => {
  return (
    <Box>
      <Dog />
    </Box>
  )
}
