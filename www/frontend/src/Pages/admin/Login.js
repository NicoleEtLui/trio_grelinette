import React, { Fragment } from 'react'
import { Formik, Form } from 'formik'
import styled from 'styled-components'
import { Input } from 'antd'
import { connect } from 'react-refetch'

import Admin from './Admin'
import AuthService from '../../utils/AuthService'

const InputAndLabel = styled.div`
  margin-bottom: 20px;
`
const Label = styled.label`
  font-weight: bold;
`

class Login extends React.Component {
  constructor () {
    super()
    this.Auth = new AuthService()
  }

  render () {
    const tokenResponse = this.props.getTokenResponse

    // token exist and not expirated ?
    if (this.Auth.isLoggedIn()) {
      return <Admin Auth={this.Auth} />
    } else {
      if (tokenResponse && tokenResponse.fulfilled && this.Auth._checkStatus(tokenResponse)) {
        console.log(tokenResponse)
        this.Auth.setToken(tokenResponse.value.token)
        return <Admin Auth={this.Auth} />
      } else {
        return (
          // TODO: extract this in a component LoginForm
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
