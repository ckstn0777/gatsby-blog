import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

export default function Header() {
  return (
    <header css={HeaderStyle}>
      <div css={HeaderBoxStyle}>
        <Link to="/">
          <img src="/image/Logo.png" css={LogoStyle} />
        </Link>

        <ul css={UlStyle}>
          <li>Home</li>
          <li>Categoies</li>
          <li>Tags</li>
          <li>About</li>
        </ul>
        <input />
      </div>
    </header>
  );
}

const HeaderStyle = css`
  grid-column: full-start / full-end;
  height: 8vh;

  position: sticky;
  top: 0px;

  z-index: 10;
  box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;

  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.562);
`;
const HeaderBoxStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  max-width: 120rem;
  height: 100%;
  margin: 0 auto;
`;

const LogoStyle = css`
  max-height: 10rem;
  max-width: 25rem;
`;

const UlStyle = css`
  flex: 1 0 0;
  list-style: none;
  font-size: 1.8rem;

  display: flex;
  justify-content: space-around;
  padding: 0 10rem;
`;
