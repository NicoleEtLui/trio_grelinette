import React from 'react'
import { connect } from 'react-refetch'

class Admin extends React.Component {
  getToken () {
    return window.localStorage.getItem('id_token')
  }

  render () {
    return (
      <div>Admin</div>
    )
  }
}

export default connect(props => ({
  fetchCommandes: {
    url: `/api/commandes`,
    headers: {
      Authorization: JSON.stringify(`Bearer ${window.localStorage.getItem('id_token')}`)
    }
  }
}))(Admin)
