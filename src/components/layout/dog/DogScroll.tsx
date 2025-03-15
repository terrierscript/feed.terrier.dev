import React, { useState } from "react"
import { Box, BoxProps, Image } from "@mantine/core"
import { randomPretty } from "./randomPretty"

export const DogScroll = (props: BoxProps) => {
  const size = 80
  const [img, setImg] = useState(randomPretty())
  return (
    <>
      <Box
        style={{
          animationTimingFunction: "linear",
          animationDuration: "1ms",
          animationFillMode: "forwards",
          animationName: "dogRotate",
          animationTimeline: "--page-scroll"
        }}
        onClick={() => {
          setImg(randomPretty())
        }}
      >
        <Box
          style={{
            overflow: "hidden",
            borderRadius: "100%"
          }}
          h={size}
          w={size}
        >
          <Image
            src={img}
            w={size}
            h={size}
            fit="cover" />
        </Box>
      </Box>
    </>

  )
}
