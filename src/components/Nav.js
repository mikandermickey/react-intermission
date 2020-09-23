import React from "react";
import { Link } from "@reach/router";
import NavLink from "./NavLink";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/subpage">Subpage</NavLink>
        </nav>
    )
};
export default Nav;