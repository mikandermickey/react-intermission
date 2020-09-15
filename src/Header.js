import React from "react";
import Nav from "./Nav";
import "./Header.scss";

const Header = () => {
    return (
        <header className="myheader">
            <p className="myheader__text">This is a header with a nav</p>
            <Nav />
        </header>
    );
};
export default Header;