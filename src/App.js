import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );

};

render(<App />, document.querySelector("#root"));
