import { Box, Grid } from "@chakra-ui/core"
import React, { FC } from "react"
import { Footer } from "./Footer"
import { Header } from "./header/HeaderBar"

export const Layout: FC<{}> = ({ children }) => {
  return <Box minWidth="400px" px="4">
    <Grid
      templateColumns="minmax(,min-content,60vw)"
      justifyContent="center"
      gap="4"
    >
      <Box
      // maxWidth="46rem" mx="auto"
      >
        <Header />
        {children}
        <Footer author="terrierscript" />
      </Box>
    </Grid>
  </Box>
}

