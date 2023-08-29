import React, { useState } from "react"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, Image, BoxProps } from "@chakra-ui/react"
import NextImage from 'next/image'

import { randomPretty } from "./randomPretty"
import { animated } from "react-spring"
import Head from "next/head"
const scale = keyframes`
`
const rotate360 = keyframes`
  0% { transform: rotate(0deg)               scale(1)  }
  5% { transform: rotate(auto)               scale(0.6)  }
  25% { transform: rotate(calc(360deg))      scale(0.6)   }
  50% { transform: rotate(calc(360deg * 2))  scale(0.6)   }
  75% { transform: rotate(calc(360deg * 3))  scale(0.6)   }
  100% { transform: rotate(calc(360deg * 4)) scale(0.6)   }
`

// const RotateImg = styled(Box)`
//   vertical-align: middle;
//   animation: ${rotate360} 6s linear infinite;
//   animation-play-state: paused;
//   :hover {
//     animation-play-state: running;
//   }
// `
// const AminatedImg = animated(RotateImg)
// console.log({ rotate360 })

// const Animated
export const DogScroll = (props: BoxProps) => {
  const size = 20
  // const springProps = useSpring({
  //   to: { opacity: 0 },
  //   from: { opacity: 1 }
  //   // () => ({ opacity: 1 })
  // })

  // console.log(springProps)
  const [img, setImg] = useState(randomPretty())
  return (
    <>
      <Head>
        <style>
          {rotate360.styles}
        </style>
      </Head>
      {/* <Box display={"hidden"} animation={`${rotate360} 1s`}></Box> */}
      <Box
        // animation={rotate360}
        sx={{
          "animation-timing-function": "linear",
          "animation-name": `${rotate360.name} `,
          "animation-timeline": "--page-scroll"
        }}
        // style={springProps}
        onClick={() => {
          // console.log("aa")
          // set({ opacity: 0 })
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
