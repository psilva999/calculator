import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html:root { 
    --main-background:#e6e6e6;
    --toggle-background:#d1cccc;
    --screen-background:#ededed;
    
    --key-background-dark-blue:#377f86;
    --key-shadow-dark-blue:#1b5f65;
    --key-background-red:#ca5502;
    
    --key-shadow-dark-red:#893901;
    --key-background-orange:#e5e4e1;
    --key-shadow-orange:#a69d91;
    
    --very-dark-grayish-blue:#35352c;
    --white:#fff;
    --white-text:#000;
  }

  body{
    background-color: var(--main-background);
    font-family:'Spartan', sans-serif;
  }
`