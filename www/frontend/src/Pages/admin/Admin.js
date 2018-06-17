import React from 'react'
import styled from 'styled-components'
import { Switch, Link, Route } from 'react-router-dom'
import { Layout } from 'antd'

import Stock from './Stock'
import Commandes from './Commandes'
import { colors } from '../../../style/variables'
const { Header, Footer, Content } = Layout

const Nav = styled.div`
  color: #fff;
`
const StyledLink = styled(Link)`
  font-weight: bold;
  color: #fff;
  padding: 0 10px;

  &:hover {
    color: ${colors.dark__lt};
  }
`

const Admin = Auth => (
  <Layout>
    <Header>
      <Nav>
        <StyledLink to='/admin/stock'>Stock</StyledLink>
        <StyledLink to='/admin/commandes'>Commandes</StyledLink>
      </Nav>
    </Header>
    <Content>
      <Switch>
        <Route path='/admin/stock' component={Stock} />
        <Route {...Auth} path='/admin/commandes' render={() => <Commandes {...Auth} />} />
      </Switch>
    </Content>
    <Footer>Footer</Footer>
  </Layout>
)

export default Admin
