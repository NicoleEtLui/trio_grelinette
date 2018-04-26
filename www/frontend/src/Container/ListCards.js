import React from 'react'
import { connect } from 'react-refetch'
import { Card, Spin } from 'antd'

import { Col } from 'react-styled-flexboxgrid'

import styled from 'styled-components'

const White = styled.div`
  background: white;
  border: solid black 1px;
  height: 200px;
`

const ListCards = ({legumesFetch}) => {
  if (legumesFetch.pending) {
    return <Spin />
  }
  if (legumesFetch.rejected) {
    return 'error'
  }
  if (legumesFetch.fulfilled) {
    let listCards = legumesFetch
      .value
      .map((leg, index) => {
        return <Col xs={4} key={index}><Card title={leg.label} extra={<a href='#'>More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card></Col>
      })
    return listCards
  }
}

export default connect(props => ({
  legumesFetch: `https://www.triogrelinette.be/api/legumes`
}))(ListCards)
