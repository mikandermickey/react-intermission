import React from "react";
import Nav from "./Nav";
import Brand from "./Brand";

const Header = () => {
    return (
        <header>
            <Brand name="My Beautiful app" />
            <Nav />
        </header>
    );
};
export default Header;