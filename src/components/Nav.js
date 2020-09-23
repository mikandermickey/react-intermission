/* @jsx jsx*/
import React from "react";
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";
import NavLink from "./NavLink";

const mycss = css`
  color: orange;
`;

const Nav = () => {
  return (
    <nav
      css={css`
        font-family: Arial, Helvetica, sans-serif;
        background-color: orange;
      `}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/subpage">Subpage</NavLink>
    </nav>
  );
};
export default Nav;
