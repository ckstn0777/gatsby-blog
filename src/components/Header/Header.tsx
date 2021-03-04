import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import SearchModal from '../SearchModal';
import { bg } from '../../utils/bg';
import { useMediaQuery } from 'react-responsive';
import Burger from '../Burger';
import SlideMenu from '../SlideMenu';

export default function Header() {
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // bg.small 아래로 떨어지면 true로 바뀜
  const isMobile = useMediaQuery({ maxWidth: bg.small });

  const onChangeQuery = useCallback((e) => {
    setQuery(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    setModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const onChangeMenuOpen = useCallback(() => {
    setMenuOpen((open) => !open);
  }, []);

  return (
    <header css={HeaderStyle}>
      <div css={HeaderBoxStyle}>
        {isMobile && (
          <Burger open={menuOpen} onChangeMenuOpen={onChangeMenuOpen} />
        )}
        <Link to="/" css={LogoLinkStyle}>
          <img src="/Image/Logo.png" css={LogoStyle} />
        </Link>

        {!isMobile && (
          <ul css={UlStyle}>
            <li>Home</li>
            <li>Categoies</li>
            <li>Tags</li>
            <Link to="/about">About</Link>
          </ul>
        )}
        <form onSubmit={onSubmit} css={formStyle}>
          <input
            name="query"
            value={query}
            onChange={onChangeQuery}
            placeholder="검색하기🔎"
          />
        </form>
        {modal && <SearchModal query={query} onCloseModal={onCloseModal} />}
      </div>
      {isMobile && (
        <SlideMenu open={menuOpen} onChangeMenuOpen={onChangeMenuOpen} />
      )}
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

  @media only screen and (max-width: ${bg.small}) {
    padding: 1rem 2rem;
  }
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

const LogoLinkStyle = css`
  @media only screen and (max-width: ${bg.small}) {
    flex: 1;
  }
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

  @media only screen and (max-width: ${bg.medium}) {
    padding: 3rem;
  }
`;

const formStyle = css`
  input {
    padding: 0.5rem;
  }
`;
