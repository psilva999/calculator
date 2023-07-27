import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html:root { 
    --main-background:#160628;
    --toggle-background:#1d0934;
    --screen-background:#1d0934;

    --key-background-dark-blue:#58077d;
    --key-shadow-dark-blue:#bc15f4;
    --key-background-red:#00e0d1;

    --key-shadow-dark-red:#6cf9f2;
    --key-background-orange:#341c4f;
    --key-shadow-orange:#871c9c;
    
    --very-dark-grayish-blue:#ffe53d;
    --white:#fff;
    --white-text:#ffe53d;
  }

  body{
    background-color:var(--main-background);
    font-family:'Spartan', sans-serif;
  }
`