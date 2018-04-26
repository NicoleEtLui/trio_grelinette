import React from 'react'
import SiteWrap from './Layout/SiteWrap'

import styled from 'styled-components'
import Leaves from '../assets/svg/leaves.svg'

import { Row, Col } from 'react-styled-flexboxgrid'

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
  display: flex;
`
const Links = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
`
const Link = styled.a`
  font-size: 12px;
  color: black;
  margin-left: 30px;
`
const StyledLeavesIcon = styled(Leaves)`
  width: 25px;
  height: 25px;
  fill: #AEAEAE;
  margin-right: 10px;
`
const StyledRow = styled(Row)`
  padding: 40px 0;
`

const Header = () =>
  <SiteWrap>
    <StyledRow>
      <Col lg={3} xs={3}>
        <Title>
          <StyledLeavesIcon />Le trio de la grelinette
        </Title>
      </Col>
      <Col lg={9} xs={9}>
        <Links>
          <Link>Commander</Link>
          <Link>Le projet</Link>
        </Links>
      </Col>
    </StyledRow>
  </SiteWrap>

export default Header
