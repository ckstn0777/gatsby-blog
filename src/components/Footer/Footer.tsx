import React from 'react'
import { css } from '@emotion/react'

export default function Footer() {
  return (
    <footer css={FooterStyle}>
      <div css={FooterBoxStyle}>
        <div css={AboutStyle}>
          <img src="/image/User.jpg" />
          <div css={AboutBoxStyle}>
            <h3>소설읽는 개발자</h3>
            <p>
              개발을 잘하기 위해서가 아닌 개발을 즐기기 위해 노력하는
              개발자입니다. 사소한 생각 정리부터 튜토리얼, 삽질기 정도를 주로
              끄적이고 있습니다.
            </p>
            <div className="icon_box">
              <img src="/svg/github.svg" />
              <img src="/svg/email.svg" />
              <img src="/svg/blogger.svg" />
              <img src="/svg/notion.svg" />
            </div>
          </div>
        </div>
        <p className="copyright">© 2021 소설읽는개발자 Powered by Gatsby</p>
      </div>
    </footer>
  )
}

const FooterStyle = css`
  grid-column: full-start / full-end;
  background-color: #37474f;
  color: white;
  font-size: 1.4rem;
`
const FooterBoxStyle = css`
  max-width: 120rem;
  margin: 0 auto;
  padding: 3rem;

  .copyright {
    letter-spacing: 2px;
    text-align: center;
  }
`

const AboutStyle = css`
  display: flex;
  flex-direction: row;

  margin-bottom: 2rem;

  img {
    border-radius: 15px;
  }
`

const AboutBoxStyle = css`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 2rem;
  }

  p {
    flex-basis: 50%;
  }
`
