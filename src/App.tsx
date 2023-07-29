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

        [themeValue, setThemeValue] = useState('8%'),
        [fontSize, setFontSize] = useState(false)

  const deleteValue = () => {
    handleFontSize()

    if (value.slice(-1) === ' ') setValue(value.substring(0, value.length - 3))

    else if (value.slice(-2) === '0.') setValue(value.substring(0, value.length - 2))

    else setValue(value.substring(0, value.length - 1))
  }

  const handleFontSize = () => { 
    if (value.length >= 19) setFontSize(true)
    
    else setFontSize(false)
  }

  const handleNumber = (item:number) => {
    handleFontSize()
    setValue(`${value}${item}`)
  }

  const addSymbol = (symbol: string) => {
    handleFontSize()

    if (value.slice(-1) !== ' ' && value.slice(-1) !== '.') 
      setValue(`${value}${symbol}`)
  }

  const calc = () => {
    if (value.length >= 5 && value.slice(-1) !== ' ')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setValue(eval(value).toString())
  }

  function handleTheme(): void {
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

      <Input fs={ fontSize? '1rem' : '1.6rem' }> { value } </Input>

      <ButtonContainer>
        <Button onClick={ () => handleNumber(7) }>7</Button>
        <Button onClick={ () => handleNumber(8) }>8</Button>
        <Button onClick={ () => handleNumber(9) }>9</Button>

        <Button 
          onClick={ () => value.length >= 1 && deleteValue() }
          color='var(--white)'
          bg='var(--key-background-dark-blue)'
          bdbox='var(--key-shadow-dark-blue)'>

          DEL
        </Button>

        <Button onClick={ () => handleNumber(4) }>4</Button>
        <Button onClick={ () => handleNumber(5) }>5</Button>
        <Button onClick={ () => handleNumber(6) }>6</Button>

        <Button onClick={ () => value.length >= 1 && addSymbol(' + ') }>
          +
        </Button>

        <Button onClick={ () => handleNumber(1) }>1</Button>
        <Button onClick={ () => handleNumber(2) }>2</Button>
        <Button onClick={ () => handleNumber(3) }>3</Button>

        <Button onClick={ () => value.length >= 1 && addSymbol(' - ') }>
          -
        </Button>

        <Button onClick={ () => value.length >= 1 && addSymbol('.') }>
          .
        </Button>

        <Button onClick={ () => handleNumber(0) }>0</Button>

        <Button onClick={ () => value.length >= 1 && addSymbol(' / ') }>
          /
        </Button>

        <Button onClick={ () => value.length >= 1 && addSymbol(' * ') }>
          x
        </Button>

        <Button 
          onClick={() => { 
            setValue('') 
            setFontSize(false)
          }}

          gc='3/5' 
          ga='5 / 1 / 6 / 3'
          color='var(--white)'
          bg='var(--key-background-dark-blue)'
          bdbox='var(--key-shadow-dark-blue)'>
          RESET
        </Button>

        <Button 
          onClick={ calc }
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
