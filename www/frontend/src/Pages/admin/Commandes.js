import React from 'react'
import { connect } from 'react-refetch'
import { Spin, Collapse } from 'antd'

import CommandePanelHeader from './CommandePanelHeader'
import CommandePanelBody from './CommandePanelBody'

const Panel = Collapse.Panel

class Commandes extends React.Component {
  render () {
    const {fetchCommandes} = this.props
    if (fetchCommandes.pending) {
      return <Spin />
    }
    if (fetchCommandes.fulfilled) {
      return (
        <Collapse Accordion>
          {fetchCommandes.value.map(com => {
            return (
              <Panel header={<CommandePanelHeader {...com} />} key={com.com_id}>
                <CommandePanelBody {...com} />
              </Panel>
            )
          })}
        </Collapse>
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
}))(Commandes)
