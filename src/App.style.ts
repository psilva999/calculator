import styled, { createGlobalStyle } from "styled-components"

export const Container = styled.main`
  max-width:${500 / 16}rem;
  min-width:${280 / 16}rem;
  margin:0 auto;
  user-select:none;

  @media screen and (min-width:${450 / 16}rem) {
    min-width:${340 / 16}rem;
  }
`

export const Flex = styled.article`
  display:flex;
  justify-content:center;
  align-items:center;
`

export const Header = styled(Flex)`
  justify-content:space-between;
  color:var(--white-text);
  width:100%;
  
  h1 {
    font-size:1.2rem;
    font-weight:400;
  }
`

export const WrapperSwitch = styled(Flex)`
  width:${115 / 16}rem;
  font-size:.85rem;
  align-items:flex-end;
  justify-content:space-between;
`

export const Switch = styled.nav`
  font-size:.9rem;
  flex:.75;
  display:grid;
  place-items:center;

  ul {
    width:80%;
    font-size:.65rem;
    font-weight:200;
    justify-content:space-between;
    margin:0 auto;
  }
`
