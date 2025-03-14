import React, { FC, PropsWithChildren } from "react"
import styled from "@emotion/styled"
import { Footer } from "./Footer"
import { Header } from "./header/HeaderBar"

const Container = styled.div`
  min-width: 400px;
`

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 40vw);
  justify-content: center;
  gap: 1rem;
`

const Content = styled.div``

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainGrid>
        <Content>
          {children}
          <Footer author="terrierscript" />
        </Content>
      </MainGrid>
    </Container>
  )
}
