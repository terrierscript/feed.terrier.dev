"use client"
import React from "react"
import dynamic from "next/dynamic"
// import { Dog } from "../layout/dog/Dog"

const DogDynamic = dynamic(
  // @ts-ignore
  () => import("../layout/dog/Dog").then((mod) => mod.Dog), {
  ssr: false
})
export const DogScrollDynamic = dynamic(
  // @ts-ignore
  () => import("../layout/dog/DogScroll").then((mod) => mod.DogScroll), {
  ssr: false
})

export const Hero = () => {
  const size = "100%"
  // @ts-ignore
  return <DogDynamic size={size} maxWidth={size} maxHeight={size} />
}