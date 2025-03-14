import { Box, Center, Group, Title, Anchor } from "@mantine/core"
import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import React, { RefObject, useEffect, useMemo, useRef, useState } from "react"
import { DogScrollDynamic } from "../../portfolio/Hero"
import Head from "next/head"
import { useMotionValueEvent, useScroll } from "framer-motion"
export const TITLE_BOLD_COLOR = "#111"

export const impactFont = "Quicksand"


const LogoLink = ({ children }: { children: React.ReactNode }) => (
  <Anchor
    component="div"
    style={{
      textDecoration: "none",
      fontWeight: "bold",
      fontFamily: impactFont,
      color: TITLE_BOLD_COLOR
    }}
  >
    {children}
  </Anchor>
)

const logoAnimation = keyframes`
  0% { font-size: 3.5em; color: black; padding-left:16px; }
  10% {  font-size: 2em ; color: #333; padding-left:0px;}
  100% {  font-size: 2em ; color: #333  padding-left:0px;}
`

const blockAnimation = keyframes`
0% { padding-bottom: 20px; }
10% { padding-bottom: 40px;}
`

// const useSafariPolyfill = (refs: RefObject<HTMLElement>[]) => {
//   const needPolyfill: boolean = useMemo(() => {
//     // @ts-ignore
//     return (typeof ScrollTimeline !== "undefined")
//   }, [])
//   const { scrollYProgress } = useScroll()
//   const [over10Percent, setOver10Percent] = useState(false)
//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     setOver10Percent(latest > 0.1)
//   })
//   useEffect(() => {

//     refs.map(ref => {

//       if (!ref.current) return
//       if (!needPolyfill) {
//         return
//       }
//       if (over10Percent) {
//         ref.current
//         ref.current.style.animationPlayState = "paused"
//       } else {
//         ref.current.style.animationPlayState = "running"
//       }
//     })
//   }, [needPolyfill, over10Percent])

// }

export const Header = () => {
  return (
    <Box
      p="md"
      style={{
        justifyContent: "center",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: "100%",
        background: "linear-gradient(#ffff 25%, #fff9 75%, #fff0 100%)",
        backdropFilter: "blur(6px)",
        maskImage: "linear-gradient(#000f 0%, #000f 75%, #0003 90%)",
        animationTimingFunction: "linear",
        animationDuration: "1ms",
        animationFillMode: "forwards",
        animationName: `${blockAnimation.name}`
      }}>

      <Head>
        <style>
          {logoAnimation.styles}
          {blockAnimation.styles}
        </style>
      </Head>
      <Center>
        <Group>
          <DogScrollDynamic />
          <Box>
            <LogoLink>
              <Title
                style={{
                  animationTimingFunction: "linear",
                  animationDuration: "1ms",
                  animationFillMode: "forwards",
                  animationName: `${logoAnimation.name}`,
                  animationTimeline: "--page-scroll"
                }}>
                terrier.dev
              </Title>
            </LogoLink>
          </Box>
        </Group>
      </Center>
    </Box>
  )
}
