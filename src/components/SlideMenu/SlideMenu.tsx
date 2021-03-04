import React, { useCallback } from 'react';
import { css } from '@emotion/react';

type SlideMenuProps = {
  open: boolean;
  onChangeMenuOpen?: () => void;
};

const SlideMenu = ({ open, onChangeMenuOpen }: SlideMenuProps) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <div css={SlideMenuWrapper({ open })} onClick={onChangeMenuOpen}>
      <div css={SlideMenuStyle({ open })} onClick={stopPropagation}>
        <a href="/">
          <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          Home
        </a>
        <a href="/">
          <span role="img" aria-label="price">
            &#x1f4b8;
          </span>
          Categories
        </a>
        <a href="/">
          <span role="img" aria-label="contact">
            &#x1f4e9;
          </span>
          Tags
        </a>
        <a href="/">
          <span role="img" aria-label="contact">
            ⭐️
          </span>
          About
        </a>
      </div>
    </div>
  );
};

const SlideMenuWrapper = ({ open }: SlideMenuProps) => css`
  ${open &&
  css`
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
  `}
`;

const SlideMenuStyle = ({ open }: SlideMenuProps) => css`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 30vw;
  padding: 10rem 2rem;

  font-size: 2rem;
  background-color: white;

  display: flex;
  flex-direction: column;
  // justify-content: center;

  transform: translateX(-100%);
  transition: all 0.2s ease-in-out;

  ${open &&
  css`
    transform: translateX(0);
  `}

  & > * {
    width: 100%;
    padding: 2rem;

    :hover {
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export default SlideMenu;
