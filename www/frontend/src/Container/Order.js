import React, { Fragment } from 'react'
import { connect } from 'react-refetch'
import { Spin } from 'antd'
import {Col, Row} from 'react-styled-flexboxgrid'

import ListCards from '../Component/ListCards'
import Cart from '../Component/Cart'

class Order extends React.Component {
  constructor () {
    super()
    this.state = {
      legumesList: [],
      cart: [],
      quantity: 0
    }

    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this)
  }

  handleAddToCart (qty, selectedProduct) {
    // add legumes ot cart
    console.log(selectedProduct)
    let cartItem = this.state.cart
    let productId = selectedProduct.leg_id
    let productQty = qty
    console.log(productQty)
    if (this.checkProduct(productId)) {
      let index = cartItem.findIndex(x => x.leg_id === productId)
      cartItem[index].quantity = productQty
      this.setState({
        cart: cartItem
      })
    } else {
      console.log(cartItem)
      selectedProduct.quantity = productQty
      cartItem.push(selectedProduct)
    }
    this.setState({
      cart: cartItem
    })
  }

  handleRemoveProduct (selectedProduct) {
    console.log(selectedProduct)
    let cart = this.state.cart
    let id = selectedProduct.leg_id
    let index = cart.findIndex((x => x.leg_id === id))
    cart.splice(index, 1)
    this.setState({
      cart: cart
    })
  }

  updateQuantity (qty, selectedProduct) {
    this.setState({
      quantity: qty
    })
    if (qty >= 1) {
      this.handleAddToCart(qty, selectedProduct)
    }
    if (qty === 0) {
      this.handleRemoveProduct(qty, selectedProduct)
    }
  }

  checkProduct (productId) {
    let cart = this.state.cart
    return cart.some((item) => {
      return item.leg_id === productId
    })
  }

  render () {
    const {legumesFetch} = this.props

    if (legumesFetch.pending) {
      return <Spin />
    }
    if (legumesFetch.rejected) {
      return 'error'
    }
    if (legumesFetch.fulfilled) {
      return <Fragment>
        <Col lg={9} xs={9}>
          <Row>
            <ListCards
              legumesList={legumesFetch.value}
              addToCart={this.handleAddToCart}
              productQuantity={this.state.quantity}
              updateQuantity={this.updateQuantity}
            />
          </Row>
        </Col>
        <Col lg={3} xs={3}>
          <Cart cart={this.state.cart}>Panier</Cart>
        </Col>
      </Fragment>
    }
  }
}

export default connect(props => ({
  legumesFetch: `http://192.168.99.100:8080/api/legumes`,
  // legumesFetch: `http://www.triogrelinette.be/api/legumes`,
  then: legumesFetch => this.setState({ legumesList: legumesFetch })
}))(Order)
