import React from "react";
import { render } from "react-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";


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
