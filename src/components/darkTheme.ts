import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html:root { 
    --main-background:#3a4764;
    --toggle-background: #232c43;
    --screen-background: #182034;

    --key-background-dark-blue: #637097;
    --key-shadow-dark-blue: #404e72;
    --key-background-red:#d03f2f;

    --key-shadow-dark-red: #93261a;
    --key-background-orange: #eae3dc;
    --key-shadow-orange:#b4a597;
    
    --very-dark-grayish-blue: #444b5a;
    --white:#fff;
    --white-text:#fff;
  }

  body{
    background-color: var(--main-background);
    font-family: 'Spartan', sans-serif;
  }
`
