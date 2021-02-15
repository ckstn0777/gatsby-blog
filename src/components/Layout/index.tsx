import React from "react"
import { css } from "@emotion/react"

import Header from "../Header"
import Footer from "../Footer"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div css={containerStyle}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

const containerStyle = css`
  display: grid;
  grid-template-columns:
    minmax(6rem, 1fr) [full-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [full-end] minmax(6rem, 1fr);

  min-height: 100vh;
`
