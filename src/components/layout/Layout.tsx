import { Box } from "@chakra-ui/core"
import React, { FC } from "react"
import { Footer } from "./Footer"
import { Header } from "./header/HeaderBar"

export const Layout: FC<{}> = ({ children }) => {
  return <Box maxWidth="46rem" mx="auto" px="10">
    <Header />
    {children}
    <Footer author="terrierscript" />
  </Box>
}

