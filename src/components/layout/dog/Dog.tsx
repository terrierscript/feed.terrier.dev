import React, { useState } from "react"
import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import { Image, ImageProps } from "@chakra-ui/core"
import { randomPretty } from "./randomPretty"

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

export const Dog = (props: ImageProps) => {
  const [img, setImg] = useState(randomPretty())
  return (
    <RotateImg src={img} {...props}
      onClick={() => setImg(randomPretty())}
      rounded={"full"}
      objectFit="cover"
    />
  )
}
