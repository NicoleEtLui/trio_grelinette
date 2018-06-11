import React from 'react'
import { connect } from 'react-refetch'
import { Spin } from 'antd'

import AuthService from '../../utils/AuthService'

class Admin extends React.Component {
  constructor () {
    super()
    this.Auth = new AuthService()
  }
  getToken () {
    return window.localStorage.getItem('id_token')
  }

  render () {
    const {fetchCommandes} = this.props
    if (fetchCommandes.pending) {
      return <Spin />
    }
    if (fetchCommandes.fulfilled) {
      return (
        <div>{JSON.stringify(fetchCommandes.value)}</div>
      )
    }
  }
}

export default connect(props => ({
  fetchCommandes: {
    url: `/api/commandes`,
    headers: {
      Authorization: JSON.stringify(`Bearer ${props.Auth.getToken()}`)
    }
  }
}))(Admin)
