import React from "react";
import {css} from "emotion";

const Brand = ({ name }) => {
    return (<h1
        className={css`
            font-family: Arial, Helvetica, sans-serif;
        `}
    
    >{name}</h1>);
}

export default Brand;