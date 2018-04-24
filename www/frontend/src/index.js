
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import Header from './Header'
import Main from './Main'
import Footer from './Footer'

ReactDOM.render(
  <Fragment>
    <Header />
    <Main />
    <Footer />
  </Fragment>,
  document.getElementById('app')
)
