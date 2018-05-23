import React from 'react'
import { Row } from 'react-styled-flexboxgrid'
import Order from './Container/Order'

import SiteWrap from './Layout/SiteWrap'
import styled from 'styled-components'

const Red = styled.div`
  background: red;
  minHeight: 200px;
`

const Main = () =>
  <SiteWrap>
    <Row>
      <Order />
    </Row>
  </SiteWrap>

export default Main
