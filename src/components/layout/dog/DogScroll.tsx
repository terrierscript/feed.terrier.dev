import React, { useState } from "react"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, BoxProps } from "@chakra-ui/react"
import NextImage from 'next/image'

import { randomPretty } from "./randomPretty"
import { animated } from "react-spring"
import Head from "next/head"
const scale = keyframes`
`
const rotate360 = keyframes`
  0% { transform: rotate(0deg)      }
  10% { transform: rotate(0deg)     }
  50% { transform: rotate(360deg)    }
  100% { transform: rotate(720deg)   }
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
          {scale.styles}
        </style>
      </Head>
      {/* <Box display={"hidden"} animation={`${rotate360} 1s`}></Box> */}
      <Box
        // animation={rotate360}
        sx={{
          "animation-timing-function": "linear",
          "animation-name": `${rotate360.name} ,${scale.name}`,
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
          display={"flex"}
          overflow="hidden"
          borderRadius={"100%"}
          width={size}
          height={size}
        >
          <NextImage
            src={img}
            width={size}
            height={size}
            objectFit="cover" />
        </Box>
      </Box>
    </>

  )
}
