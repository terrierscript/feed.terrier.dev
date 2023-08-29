import { Box, Grid } from "@chakra-ui/react"
import React, { FC, PropsWithChildren } from "react"
import { Footer } from "./Footer"
import { Header } from "./header/HeaderBar"

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Box minWidth="400px" px="4">
    <Header />
    <Grid
      templateColumns="minmax(min-content,40vw)"
      justifyContent="center"
      gap="4"
    >
      <Box
      // maxWidth="46rem" mx="auto"
      >
        {children}
        <Footer author="terrierscript" />
      </Box>
    </Grid>
  </Box>
}

