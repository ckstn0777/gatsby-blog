import React, { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import SearchModal from '../SearchModal';

export default function Header() {
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(false);

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

  return (
    <header css={HeaderStyle}>
      <div css={HeaderBoxStyle}>
        <Link to="/">
          <img src="/Image/Logo.png" css={LogoStyle} />
        </Link>

        <ul css={UlStyle}>
          <li>Home</li>
          <li>Categoies</li>
          <li>Tags</li>
          <Link to="/about">About</Link>
        </ul>
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

const formStyle = css`
  input {
    padding: 0.5rem;
  }
`;
