import React, { Fragment } from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import { Input } from 'antd'
import { connect } from 'react-refetch'

import Admin from './Admin'

const InputAndLabel = styled.div`
  margin-bottom: 20px;
`
const Label = styled.label`
  font-weight: bold;
`

class Login extends React.Component {
  setToken (idToken) {
    // Saves user token to localStorage
    window.localStorage.setItem('id_token', idToken)
  }

  render () {
    const tokenResponse = this.props.getTokenResponse
    // TODO: test if a token already exists and is still valid (not expirate) to
    // log automatically
    if (tokenResponse && tokenResponse.fulfilled) {
      // register token
      this.setToken(this.props.getTokenResponse.value.token)
      // redirect to Admin
      return (
        <Admin />
      )
    }

    return (
      <Fragment>
        <Formik
          initialValues={{
            login: 'login',
            mdp: 'mot de passe'
          }}
          isSubmitting
          onSubmit={
            values => {
              this.props.getToken(values)
            }
          }
          render={({
            values,
            handleChange
          }) => (
            <Form>
              <InputAndLabel>
                <Label htmlFor='login'>Login</Label>
                <Input
                  type='text'
                  name='login'
                  id='login'
                  placeholder={values.login}
                  onChange={handleChange}
                  required
                />
              </InputAndLabel>
              <InputAndLabel>
                <Label htmlFor='mdp'>Mot de passe</Label>
                <Input
                  type='password'
                  name='mdp'
                  id='mdp'
                  placeholder={values.mdp}
                  onChange={handleChange}
                  required
                />
              </InputAndLabel>
              <button type='submit'>
                Log in
              </button>
            </Form>
          )}
        />
      </Fragment>
    )
  }
}

const ConnectedLogin = connect(props => ({
  getToken: credentials => ({
    getTokenResponse: {
      url: `/api/token`,
      method: 'POST',
      body: JSON.stringify({ ...credentials })
    }
  })
}))(Login)

export default ConnectedLogin
