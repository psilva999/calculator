import { useState } from 'react'

import GlobalStyleDark from './Style/darkTheme'
import GlobalStyleWhite from './Style/whiteTheme'
import GlobalStylePurple from './Style/purpleTheme'

import { Container, Header, Switch, WrapperSwitch } from './App.style'

function App() {

  return (
    <Container>

      <Header> <h1>Calc</h1>

        <WrapperSwitch>
          <span>theme</span>

          <Switch>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </Switch>

        </WrapperSwitch>
      </Header>
    </Container>

  )
}

export default App
