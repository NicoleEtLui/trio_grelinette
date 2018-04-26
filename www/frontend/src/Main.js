import React from 'react'
import {Col, Row} from 'react-styled-flexboxgrid'
import ListCards from './Container/ListCards'

import SiteWrap from './Layout/SiteWrap'
import styled from 'styled-components'

const Red = styled.div`
  background: red;
  minHeight: 200px;
`
const Main = () =>
  <SiteWrap>
    <Row>
      <Col lg={9} xs={9}>
        <Red>
          <Row>
            <ListCards />
          </Row>
        </Red>
      </Col>
      <Col lg={3} xs={3}>
        <Red>Panier</Red>
      </Col>
    </Row>
  </SiteWrap>

export default Main
