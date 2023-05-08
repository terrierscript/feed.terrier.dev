import React, { useState } from "react"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, BoxProps } from "@chakra-ui/react"
import NextImage from 'next/image'

import { randomPretty } from "./randomPretty"
import { animated } from "react-spring"
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const RotateImg = styled(Box)`
  vertical-align: middle;
  animation: ${rotate360} 6s linear infinite;
  animation-play-state: paused;
  :hover {
    animation-play-state: running;
  }
`

const AminatedImg = animated(RotateImg)
// const Animated
export const Dog = (props: BoxProps) => {
  // const springProps = useSpring({
  //   to: { opacity: 0 },
  //   from: { opacity: 1 }
  //   // () => ({ opacity: 1 })
  // })

  // console.log(springProps)
  const [img, setImg] = useState(randomPretty())
  return (
    <AminatedImg
      // style={springProps}
      onClick={() => {
        // console.log("aa")
        // set({ opacity: 0 })
        setImg(randomPretty())
      }}
    // layout={"fill"}
    >
      <Box
        display={"flex"}
        overflow="hidden"
        borderRadius={"100%"}
        {...props}
      >
        <NextImage
          src={img}
          width={300}
          height={300}
          objectFit="cover" />
      </Box>
    </AminatedImg>
  )
}
