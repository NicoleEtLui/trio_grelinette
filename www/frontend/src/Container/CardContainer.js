
import React from 'react'

import { Card } from '../Component/Card'

class CardContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedProduct: {}
    }
  }
  addToCart (image, name, price, id, quantity) {
    this.setState({
      selectedProduct: {
        image: image,
        name: name,
        price: price,
        id: id,
        quantity: quantity
      }
    }, () => {
      this.props.addToCart(this.state.selectedProduct)
    })
  }
  render () {
    return (
      <Card />
    )
  }
}

export default CardContainer
