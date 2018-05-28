
import React from 'react'
import { Formik, Form } from 'formik'
import { connect } from 'react-refetch'
import styled from 'styled-components'

import Basket from '../../assets/svg/basket.svg'
import { colors } from '../../style/variables'

const moment = require('moment')

const StyledBasket = styled(Basket)`
  fill: #fff;
  width: 28px;
  height: 34px;
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
class CartForm extends React.Component {
  render () {
    let commande = {
      'cli_id': '',
      'date_com': moment().format('YYYY-MM-DD'),
      'listeLegumes': this.props.legumes
    }
    return (
      <Formik
        initialValues={{
          email: 'machin@example.com'
        }}
        isSubmitting
        onSubmit={
          values => {
            commande.cli_id = values.email
            this.props.postCommande(commande)
          }
        }
        render={({
          values,
          handleChange
        }) => (
          <Form>
            <input
              type='email'
              name='email'
              placeholder={values.email}
              onChange={handleChange} />
            <CartButton type='submit'>
              Valider ma commande
              <StyledBasket />
            </CartButton>
          </Form>
        )}
      />
    )
  }
}

const ConnectedCartForm = connect(props => ({
  postCommande: commande => ({
    postCommandeResponse: {
      url: `http://192.168.99.100:8080/api/commandes/add`,
      method: 'POST',
      body: JSON.stringify({ commande }),
      then: console.log('post then')
    }
  })
}))(CartForm)

export default ConnectedCartForm
