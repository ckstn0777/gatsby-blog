import React from 'react';
import { css } from '@emotion/react';

type BurgerProps = {
  open: boolean;
  onChangeMenuOpen?: () => void;
};

const Burger = ({ open, onChangeMenuOpen }: BurgerProps) => {
  return (
    <button css={BurgerStyle({ open })} onClick={onChangeMenuOpen}>
      <div />
      <div />
      <div />
    </button>
  );
};
const BurgerStyle = ({ open }: BurgerProps) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  margin-right: 12px;

  &:focus {
    outline: none;
  }

  & > * {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.54);
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${open ? '0' : '1'};
      transform: ${open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default Burger;
