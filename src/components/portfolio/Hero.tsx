import { Box } from "@chakra-ui/core"
import React from "react"
import { Dog } from "../layout/header/Dog"

export const Hero = () => {
  return <Box px={20}>
    <Dog size={"100%"} />
  </Box>
}