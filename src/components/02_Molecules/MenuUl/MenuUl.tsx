/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const ulStyle = css`
  list-style: none;
  margin: 0;
  padding: 2rem;
  li {
    padding: 0.5rem 0;
  }
`;

interface ImenuulProps {
  children: React.ReactNode;
}

const MenuUl = ({ children }: ImenuulProps) => {
  return <ul css={ulStyle}>{children}</ul>;
};

export default MenuUl;
