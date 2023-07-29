import styled from "styled-components"

type Props = {
  color?: string;
  bg?: string;
  bdbox?: string;

  gc?: string; 
  ga?: string;
}

type Theme = {
  theme: string;
} 

type FontSize = {
  fs?: string
}

export const Container = styled.main`
  width:${ 400 / 16 }rem;
  margin:0 auto;
  user-select:none;

  @media screen and (max-width:${420 / 16}rem) {
    width:95vw;
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
    width:70%;
    font-size:.65rem;
    font-weight:200;
    justify-content:space-between;
    margin:0 auto;
    opacity:.6;
  }
`

export const SwitcherContainer = styled.div`
  background:var(--toggle-background);
  width:100%;
  min-height:${17 / 16}rem;
  border-radius:2rem;
  position:relative;
  z-index:5;
  cursor:pointer;
`

export const Switcher = styled.div<Theme>`
  width:${11 / 16}rem;
  height:${11 / 16}rem;
  min-height:${11 / 16}rem;
  background:var(--key-background-red);
  border-radius:100%;
  position:absolute;
  left:${(props) => props.theme};
  top:19%;
  transition:all .1s linear;
`

export const Input = styled.p<FontSize>`
  width:100%;
  height:${79 / 16}rem;
  padding:1.7rem 1rem;
  overflow:hidden;
  font-size:
    ${ props => props.fs? props.fs : '1.6rem' };

  color:var(--white-text);
  background:var(--screen-background);
  text-align:right;
  margin-top:1.3rem;
  border-radius:.5rem;
`

export const ButtonContainer = styled.section`
  width:100%;
  padding:15px 10px;
  background:var(--toggle-background);
  min-height:${330 / 16}rem;
  border-radius:.5rem;
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  grid-template-rows:repeat(4, 1fr);
  gap:14px 12px;
  margin-top:1rem;

  @media (max-width:${420 / 16}rem) {
    min-height:300px;
    gap:12px 8px;
  }
`

export const Button = styled(Flex)<Props>`
  border-radius:.3rem;
  padding:10px;
  font-size:1.2rem;
  opacity:.8;
  cursor:pointer;
  max-width:${ props => props.gc? '100%' : '85px'};
  height:${ 56 / 16 }rem;
  grid-column:${ props => props.gc? props.gc : 'auto' };
  grid-area:${ props => props.gc? props.ga : 'auto' };
  
  background:${ props => 
    props.bg ? props.bg : 'var(--key-background-orange)' };

  color:${ props => 
    props.color ? props.color : 'var(--very-dark-grayish-blue)' };

  box-shadow:0 3px 0 
    ${ props => props.bdbox ? props.bdbox : 'var(--key-shadow-orange)' };


  &, &:hover {
    transition:.2s;
  }

  &:hover {
    opacity:1;
  }

  @media (max-width:${ 420 / 16 }rem) {
    max-width:100%;
    height:47px;
  }
`
