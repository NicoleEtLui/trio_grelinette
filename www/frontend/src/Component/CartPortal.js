
import React, { Fragment } from 'react'
import { PortalWithState } from 'react-portal'
import styled from 'styled-components'

import CartForm from '../Container/CartForm'
import { colors } from '../../style/variables'

import Basket from '../../assets/svg/basket.svg'
import Cross from '../../assets/svg/delete.svg'

const PortalBackground = styled.div`
  background: ${colors.dark__dk__transparent};
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`
const StyledPortal = styled.div`
  background: #fff;
  left: 50%;
  max-width: 100%;
  max-height: 100%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  z-index: 1000;
  margin: 0 15px;
  padding: 30px;
`

const CartButton = styled.button`
  background: ${colors.dark__lt};
  border: none;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  padding: 20px 15px;
  justify-content: space-between;
`
const EscapeButton = styled(Cross)`
  position: absolute;
  top: -25px;
  right: 0;
  fill: #fff;
  height: 15px;
  width: 15px;
`

const StyledBasket = styled(Basket)`
  fill: #fff;
  width: 28px;
  height: 34px;
`

const CartPortal = (
  cart
) => (
  <PortalWithState closeOnOutsideClick closeOnEsc>
    {({ openPortal, closePortal, isOpen, portal }) => (
      <Fragment>
        <CartButton onClick={openPortal}>
          Valider ma commande
          <StyledBasket />
        </CartButton>
        {isOpen && <PortalBackground />}
        {portal(
          <StyledPortal>
            <EscapeButton onClick={closePortal} />
            <CartForm cart={cart} />
          </StyledPortal>
        )}
      </Fragment>
    )}
  </PortalWithState>
)

export default CartPortal
