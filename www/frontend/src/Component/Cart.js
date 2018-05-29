
import React from 'react'
import styled from 'styled-components'

import { colors } from '../../style/variables'
import CartItem from '../Component/CartItem'
import CartPortal from './CartPortal'

const StyledCart = styled.div`
  box-shadow: 0 0 15px rgba(51, 51, 51, .15);
  padding: 10px 0 0;
  border-radius: 3px;
`

const CartTitle = styled.div`
  color: ${colors.dark__lt}
  font-size: 35px;
  padding-bottom: 30px;
  margin: 0 20px;
`
const Cart = ({
  cart
}) => (
  <StyledCart>
    <CartTitle>Mon Panier</CartTitle>
    {cart.map(legume =>
      <CartItem key={legume.leg_id} legume={legume} />
    )}
    <CartPortal />
  </StyledCart>
)

export default Cart
