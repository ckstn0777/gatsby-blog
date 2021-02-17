import React from 'react'
import { css } from '@emotion/react'

type Props = {
  mainText: string
  subText?: string
}

export default function Thumbnail({ mainText, subText }: Props) {
  return (
    <div css={ThumbnailStyle}>
      <div css={ThumbnailTextBoxStyle}>
        <h3>{mainText}</h3>
        {subText && <p>{subText}</p>}
      </div>
    </div>
  )
}

const ThumbnailStyle = css`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(/Image/Thumbnail.jpg);
  background-size: cover;
  background-position: center;

  height: 30vh;
  position: absolute;
  width: 100%;
  left: 0;
`

const ThumbnailTextBoxStyle = css`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 2.5rem;
`
