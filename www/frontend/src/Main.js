import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Row } from 'react-styled-flexboxgrid'

import SiteWrap from './Layout/SiteWrap'
import Order from './Container/Order'
import Projet from './Pages/Projet/Projet'
import Login from './Pages/admin/Login'
import Admin from './Pages/admin/Admin'

const Main = () =>
  <SiteWrap>
    <Row>
      <Switch>
        <Route exact path='/' component={Order} />
        <Route path='/projet' component={Projet} />
        <Route path='/admin' component={Login} />
        <Route render={() => <h1>404 Error</h1>} />
      </Switch>
    </Row>
  </SiteWrap>

export default Main
