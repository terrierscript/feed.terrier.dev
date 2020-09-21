import { Box } from "@chakra-ui/core"
import React, { FC } from "react"
import { Footer } from "./Footer"
import { HeaderBar } from "./header/HeaderBar"

const Header = () => <HeaderBar />
export const Layout: FC<{}> = ({ children }) => {
  return <Box maxWidth="46rem" mx="auto">
    <Header />
    {children}
    <Footer author="terrierscript" />
  </Box>
}

