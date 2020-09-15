import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Nav from "./Navigation";
import Main from "./Main";
import Footer from "./Footer";


const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );

};

render(<App />, document.querySelector("#root"));
