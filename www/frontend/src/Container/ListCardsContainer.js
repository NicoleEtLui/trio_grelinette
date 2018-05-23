import React from 'react'
import { connect } from 'react-refetch'
import { Spin } from 'antd'

import ListCards from '../Component/ListCards'

class ListCardsContainer extends React.Component {
  constructor () {
    super()
    this.state = {
      legumesList: [],
      cart: [],
      quantity: 0
    }

    this.handleAddToCart = this.handleAddToCart.bind(this)
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  handleAddToCart (selectedProducts) {
    // add legumes ot cart
    console.log(selectedProducts)
  }

  updateQuantity (qty) {
    console.log('quantity added...')
    this.setState({
      quantity: qty
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
      return <ListCards
        legumesList={legumesFetch.value}
        addToCart={this.handleAddToCart}
        productQuantity={this.state.quantity}
        updateQuantity={this.updateQuantity} />
    }
  }
}

export default connect(props => ({
  // legumesFetch: `http://192.168.99.100:8080/api/legumes`
  legumesFetch: `http://www.triogrelinette.be/api/legumes`,
  then: legumesFetch => this.setState({ legumesList: legumesFetch })
}))(ListCardsContainer)
