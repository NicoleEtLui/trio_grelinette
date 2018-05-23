
import React from 'react'
import styled from 'styled-components'

import Delete from '../../assets/svg/delete.svg'
import { colors } from '../../style/variables'

const CartItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  margin: 0 20px;
`
const CartItemLabel = styled.div`
  text-transform: capitalize;
  font-weight: bold;
`
const CartItemDetail = styled.div`
  color: ${colors.dark__md};
`
const CartItemIcon = styled.div`
  color: black;
  background: ${colors.dark__lt};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledIcon = styled(Delete)`
  width: 7px;
  height: 7px;
  fill: #fff;
`
const CartItem = ({
  legume
}) => (
  <CartItemBox>
    <div>
      <CartItemLabel>{legume.label}</CartItemLabel>
      <CartItemDetail>x {legume.quantity} legume.unit</CartItemDetail>
    </div>
    <CartItemIcon>
      <StyledIcon />
    </CartItemIcon>
  </CartItemBox>
)

export default CartItem
