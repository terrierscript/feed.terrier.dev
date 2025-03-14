import React, { useState } from "react"
import { keyframes } from "@emotion/react"
import { Box, BoxProps, Image } from "@mantine/core"

import { randomPretty } from "./randomPretty"
import Head from "next/head"

const rotate360 = keyframes`
  0% { transform: rotate(0turn)   scale(1)  }
  5% { transform: rotate(auto)    scale(0.6)  }
  25% { transform: rotate(1turn)  scale(0.6)   }
  50% { transform: rotate(2turn)  scale(0.6)   }
  75% { transform: rotate(3turn)  scale(0.6)   }
  100% { transform: rotate(4turn) scale(0.6)   }
`

export const DogScroll = (props: BoxProps) => {
  const size = 80
  const [img, setImg] = useState(randomPretty())
  return (
    <>
      <Head>
        <style>
          {rotate360.styles}
        </style>
      </Head>
      <Box
        style={{
          animationTimingFunction: "linear",
          animationDuration: "1ms",
          animationFillMode: "forwards",
          animationName: `${rotate360.name} `,
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
