import React from "react";
import NavLink from "./NavLink";
import { css } from "emotion";

const Nav = () => {
    const navCss = css`
        background-color:#333;
        padding: 100px;
    `;
    return (
        <nav
            className={navCss}
            >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/subpage">Subpage</NavLink>
        </nav>
    )
};
export default Nav;