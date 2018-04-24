import React from 'react'
import SiteWrap from './Layout/SiteWrap'

import styled from 'styled-components'
import Leaves from '../assets/svg/leaves.svg'

import { Row } from 'react-flexbox-grid'

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: black;
  display: flex;
`
const Links = styled.div`
  font-size: 16px;
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

const Header = () =>
  <SiteWrap>
    <Row lg={12} between='xs'>
      <Title>
        <StyledLeavesIcon />Le trio de la grelinette
      </Title>
      <Links>
        <Link>Commander</Link>
        <Link>Le projet</Link>
      </Links>
    </Row>
  </SiteWrap>

export default Header
