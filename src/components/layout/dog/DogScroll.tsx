import React, { useState } from "react"
// import { keyframes } from "@emotion/react"
import { Box, Image, BoxProps, keyframes } from "@chakra-ui/react"

import { randomPretty } from "./randomPretty"
import Head from "next/head"

const rotate360 = keyframes`
  0% { transform: rotate(0turn)               scale(1)  }
  5% { transform: rotate(auto)               scale(0.6)  }
  25% { transform: rotate(1turn)      scale(0.6)   }
  50% { transform: rotate(2turn)  scale(0.6)   }
  75% { transform: rotate(3turn)  scale(0.6)   }
  100% { transform: rotate(4turn) scale(0.6)   }
`

export const DogScroll = (props: BoxProps) => {
  const size = 20
  const [img, setImg] = useState(randomPretty())
  return (
    <>
      <Head>
        <style>
          {rotate360.styles}
        </style>
      </Head>
      <Box
        sx={{
          "animation-timing-function": "linear",
          "animation duration": "1ms",
          "animation-name": `${rotate360.name} `,
          "animation-timeline": "--page-scroll"
        }}
        // style={springProps}
        onClick={() => {
          setImg(randomPretty())
        }}
      // layout={"fill"}
      >
        <Box
          overflow="hidden"
          borderRadius={"100%"}
          height={size}
          width={size}
        >
          <Image
            src={img}
            width={size}
            height={size}
            objectFit="cover" />
        </Box>
      </Box>
    </>

  )
}
