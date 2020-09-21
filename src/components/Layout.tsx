import { Box } from "@chakra-ui/core"
import React, { FC } from "react"
import { HeaderBar } from "./header/HeaderBar"

const Footer = () => <>

</>
const Header = () => <HeaderBar />
export const Layout: FC<{}> = ({ children }) => {
  return <Box maxWidth="46rem" mx="auto">
    <Header />
    {children}
    <Footer />
  </Box>
}

