
import React, { Fragment } from 'react'
import { Formik, Form } from 'formik'
import { connect } from 'react-refetch'
import { Input } from 'antd'
import styled from 'styled-components'

import RelayPoint from './RelayPoint'

const moment = require('moment')

const InputAndLabel = styled.div`
  margin-bottom: 20px;
`
const Label = styled.label`
  font-weight: bold;
`
class CartForm extends React.Component {
  render () {
    let commande = {
      'cli_id': '',
      'cli_name': '',
      'cli_tel': '',
      'date_com': moment().format('YYYY-MM-DD'),
      'point_relais_id': '',
      'listeLegumes': this.props.cart
    }
    return (
      <Fragment>
        {/* is a recap of the order necessary ? */}
        {/* {this.props.cart.cart.map(legume =>
          <CartItem key={legume.leg_id} legume={legume} />
        )} */}
        <Formik
          initialValues={{
            email: 'machin@example.com',
            name: 'Dupont Jean'
          }}
          isSubmitting
          cart={this.props.cart}
          onSubmit={
            values => {
              commande.cli_id = values.email
              commande.cli_name = values.name
              commande.cli_tel = values.tel
              commande.point_relais_id = values.relayPoint
              this.props.postCommande(commande)
            }
          }
          render={({
            values,
            handleChange
          }) => (
            <Form>
              <InputAndLabel>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  name='email'
                  id='email'
                  placeholder={values.email}
                  onChange={handleChange}
                  required
                />
              </InputAndLabel>
              <InputAndLabel>
                <Label htmlFor='name'>Nom et prénom</Label>
                <Input
                  type='name'
                  name='name'
                  id='name'
                  placeholder={values.name}
                  onChange={handleChange}
                  required
                />
              </InputAndLabel>
              <InputAndLabel>
                <Label htmlFor='tel'>N° de téléphone</Label>
                <Input
                  type='tel'
                  name='tel'
                  id='tel'
                  placeholder={values.tel}
                  onChange={handleChange}
                  required
                />
              </InputAndLabel>
              <RelayPoint handleChange={handleChange} />
              <button type='submit'>
                Valider ma commande
              </button>
            </Form>
          )}
        />
      </Fragment>
    )
  }
}

const ConnectedCartForm = connect(props => ({
  postCommande: commande => ({
    postCommandeResponse: {
      url: `/api/commandes/add`,
      method: 'POST',
      body: JSON.stringify({ ...commande }),
      then: console.log({ ...commande })
    }
  })
}))(CartForm)

export default ConnectedCartForm
