import React, { useState } from "react"
import styled from "@emotion/styled"
import NextImage from 'next/image'

import { randomPretty } from "./randomPretty"
import { animated } from "react-spring"

const RotateImg = styled.div`
  vertical-align: middle;
  animation: rotate360 6s linear infinite;
  animation-play-state: paused;
  :hover {
    animation-play-state: running;
  }
`

const AminatedImg = animated(RotateImg)
// const Animated
export const Dog = (props: React.HTMLAttributes<HTMLDivElement>) => {
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
      <div
        style={{
          display: "flex",
          overflow: "hidden",
          borderRadius: "100%"
        }}
        {...props}
      >
        <NextImage
          src={img}
          width={300}
          height={300}
          objectFit="cover"
          alt="Random pretty dog" />
      </div>
    </AminatedImg>
  )
}
