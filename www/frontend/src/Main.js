import React from 'react'
import { Card } from 'antd'
import styled from 'styled-components'

import SiteWrap from './Layout/SiteWrap'

const Red = {
  background: 'red',
  height: '20px',
  margin: '30px'
}

const Main = () =>
  <SiteWrap>
    {/* <Row Gutter={30}>
      <Col span={18} style={MainStyle}>
        <Card title='Card title' extra={<a href='#'>More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Col>
      <Col span={6} style={Aside}>
        Panier
      </Col>
    </Row> */}
    <Row>
      <Col style={Red} lg={6} />
      <Col style={Red} lg={3} />
    </Row>
  </SiteWrap>

export default Main
