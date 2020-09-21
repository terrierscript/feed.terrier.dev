import { Box } from "@chakra-ui/core"
import React, { FC } from "react"

export const Layout: FC<{}> = ({ children }) => {
  return <Box maxWidth="46rem" mx="auto">
    <Header />
    {children}
  </Box>
}
const Header = () => <></>
