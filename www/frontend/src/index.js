
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import {ThemeProvider} from 'styled-components'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // column
    gutterWidth: 1.875, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: { // default if not fluid
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
}

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Header />
        <Main />
        <Footer />
      </Fragment>
    </ThemeProvider>
  </Router>,
  document.getElementById('app')
)
