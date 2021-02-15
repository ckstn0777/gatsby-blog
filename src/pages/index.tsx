import React from "react"
import { Global, css } from "@emotion/react"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div>Hello world!</div>
      <Global styles={globalStyle} />
    </Layout>
  )
}

const globalStyle = css`
  // --font-primary:
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16 = 62.5% -> 1rem = 10px
  }

  body {
    // font-family: $font-primary;
    background: linear-gradient(139.17deg, #f5f5f5 0%, #bdbdbd 100%), #bdbdbd;
    font-weight: 300;
    line-height: 1.6;
  }
`
