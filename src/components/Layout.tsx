import { Box } from "@chakra-ui/core"
import React, { FC } from "react"
import { HeaderBar } from "./header/HeaderBar"

export const Layout: FC<{}> = ({ children }) => {
  return <Box maxWidth="46rem" mx="auto">
    <Header />
    {children}
  </Box>
}
const Header = () => <HeaderBar />
