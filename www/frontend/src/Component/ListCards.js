import React, { Fragment } from 'react'
import { Col } from 'react-styled-flexboxgrid'

import { CardContainer } from '../Container/CardContainer'

const ListCards = ({
  legumesList,
  addTocart
}) => (
  <Fragment>
    {legumesList.map((leg, index) => {
      return <Col xs={4} key={index}>
        <CardContainer legume={leg} />
      </Col>
    })}
  </Fragment>
)

export default ListCards
