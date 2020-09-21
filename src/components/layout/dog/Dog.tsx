import React, { useState } from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { Grid, Image, ImageProps } from "@chakra-ui/core"
import { randomPretty } from "./randomPretty"
import { animated, useSpring } from "react-spring"
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
const RotateImg = styled(Image)`
  vertical-align: middle;
  animation: ${rotate360} 6s linear infinite;
  animation-play-state: paused;
  :hover {
    animation-play-state: running;
  }
`

const AminatedImg = animated(RotateImg)
// const Animated
export const Dog = (props: ImageProps) => {
  // const springProps = useSpring({
  //   to: { opacity: 0 },
  //   from: { opacity: 1 }
  //   // () => ({ opacity: 1 })
  // })

  // console.log(springProps)
  const [img, setImg] = useState(randomPretty())
  return (
    <AminatedImg src={img}
      {...props}
      // style={springProps}
      onClick={() => {
        // console.log("aa")
        // set({ opacity: 0 })
        setImg(randomPretty())
      }}
      rounded={"100%"}
      objectFit="cover"
    />
  )
}
