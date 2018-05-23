import React, { Fragment } from 'react'
import { Col } from 'react-styled-flexboxgrid'

import CardContainer from '../Container/CardContainer'

const ListCards = ({
  legumesList,
  addTocart,
  productQuantity,
  updateQuantity
}) => (
  <Fragment>
    {legumesList.map((leg, index) => (
      <Col xs={4} key={index}>
        <CardContainer
          legume={leg}
          productQuantity={productQuantity}
          updateQuantity={updateQuantity} />
      </Col>
    ))}
  </Fragment>
)

export default ListCards
