import React, { FC, PropsWithChildren } from "react"
import styled from "@emotion/styled"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { Anchor, AnchorProps } from "@mantine/core"

const FooterContainer = styled.footer`
  /* background: #f0f0f0; */
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.5em;
`

const LinkIcon: FC<PropsWithChildren<AnchorProps & { href: string }>> = (props) => (
  <Anchor
    {...props}
    href={props.href}
    style={{
      fontSize: '1.5em',
      padding: '0 0.2em',
      color: '#262626',
      '&:hover': {
        color: '#404040',
      },
    }}
  />
)

const Name = styled.div`
  padding: 0 0.5em;
`

export const Footer: FC<{ author: string }> = ({ author }) => {
  return (
    <FooterContainer>
      <Name>@{author}</Name>
      <LinkIcon href={`https://github.com/${author}`}>
        <FaGithub />
      </LinkIcon>
      <LinkIcon href={`https://twitter.com/${author}`}>
        <FaTwitter />
      </LinkIcon>
    </FooterContainer>
  )
}
