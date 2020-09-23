import React from "react";
import { Router } from "@reach/router";
import Home from "../src/views/Home";
import Subpage from "../src/views/Subpage";

const Main = () => {
  return (
    <main>
      <Router>
        <Home path="/" />
        <Subpage path="/subpage" />
      </Router>
    </main>
  );
};
export default Main;
