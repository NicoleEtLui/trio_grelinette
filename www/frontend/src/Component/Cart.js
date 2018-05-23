
import React from 'react'
import styled from 'styled-components'

import CartItem from './CartItem'
import { colors } from '../../style/variables'
import Basket from '../../assets/svg/basket.svg'

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

const CartButton = styled.div`
  background: ${colors.dark__lt};
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  padding: 20px 15px;
  justify-content: space-between;
`
const StyledBasket = styled(Basket)`
  fill: #fff;
  width: 28px;
  height: 34px;
`
const Cart = ({
  cart
}) => (
  <StyledCart>
    <CartTitle>Mon Panier</CartTitle>
    {cart.map(legume =>
      <CartItem key={legume.leg_id} legume={legume} />
    )}
    <CartButton>
      Valider ma commande
      <StyledBasket />
    </CartButton>
  </StyledCart>
)

export default Cart
