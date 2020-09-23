import React from "react";
import { Router } from "@reach/router"
import Home from "../views/Home";
import Subpage from "../views/Subpage";

const Main = () => {
    return (
        (
            <main>
                <Router>
                    <Home path="/" />
                    <Subpage path="/subpage" />
                </Router>
            </main>
        ));
};
export default Main;