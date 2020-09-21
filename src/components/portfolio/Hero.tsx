import { Box } from "@chakra-ui/core"
import React from "react"
import dynamic from "next/dynamic"
// import { Dog } from "../layout/dog/Dog"

const DogDynamic = dynamic(
  // @ts-ignore
  () => import("../layout/dog/Dog").then((mod) => mod.Dog), {
  ssr: false
})
export const Hero = () => {
  // @ts-ignore
  return <DogDynamic size="80%" maxWidth={"80%"} maxHeight={"80%"} />
}