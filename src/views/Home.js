/*@jsx jsx*/

import React from "react";
import { jsx, css } from "@emotion/core";
const Home = () => {
  return (
    <>
      <h1
        css={css`
          font-family: Arial, Helvetica, sans-serif;
        `}
      >
        This is the Homepage
      </h1>
      <p>A lot of stuff can go in here</p>
    </>
  );
};

export default Home;
