import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyle from './styles/global'
import Routes from './routes'

const mainElement = document.createElement('div')
document.body.appendChild(mainElement)

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
)

render(<App />, mainElement)
