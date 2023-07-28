import { useState } from 'react'

import GlobalStyleDark from './Style/darkTheme'
import GlobalStyleWhite from './Style/whiteTheme'
import GlobalStylePurple from './Style/purpleTheme'

import { 
  Container, 
  Header, 
  Switch, 

  SwitcherContainer,
  WrapperSwitch, 
  Switcher,

  Input,
  ButtonContainer,
  Button,
} from './App.style'

function App() {

  const [value, setValue] = useState(''),
        [theme, setTheme] = useState(1),
        [themeValue, setThemeValue] = useState('8%')

  const handleTheme = () => {
    if (theme === 1) {
      setTheme(2)
      setThemeValue('38%')
    }

    else if (theme === 2) {
      setTheme(3)
      setThemeValue('70%')
    }

    else {
      setTheme(1)
      setThemeValue('8%')
    }
  }

  return (
    <Container>

      { theme === 1 && <GlobalStyleDark/> }
      { theme === 2 && <GlobalStyleWhite/> }
      { theme === 3 && <GlobalStylePurple/> }

      <Header> <h1>Calc</h1>

        <WrapperSwitch>
          <span>theme</span>

          <Switch>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>

            <SwitcherContainer onClick={ handleTheme }>
              <Switcher theme={ themeValue }/>
            </SwitcherContainer>
          </Switch>

        </WrapperSwitch>
      </Header>

      <Input></Input>

      <ButtonContainer>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>

        <Button>
          DEL
        </Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>

        <Button>
          +
        </Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>

        <Button>
          -
        </Button>

        <Button>.</Button>
        <Button>0</Button>
        <Button>/</Button>

        <Button>
          +
        </Button>

        <Button 
          gc='3/5' 
          ga='5 / 1 / 6 / 3'
          color='var(--white)'
          bg='var(--key-background-dark-blue)'
          bdbox='var(--key-shadow-dark-blue)'>
          RESET
        </Button>

        <Button 
          gc='3/5' 
          ga='5 / 3 / 6 / 5'
          color='var(--white)'
          bg='var(--key-background-red)'
          bdbox='var(--key-shadow-dark-red)'>
          =
        </Button>

      </ButtonContainer>
    </Container>

  )
}

export default App
