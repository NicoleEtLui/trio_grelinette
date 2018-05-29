
import React, { Fragment } from 'react'
import { connect } from 'react-refetch'
import { Radio, Spin } from 'antd'
import styled from 'styled-components'
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const StyledRadioButton = styled(RadioButton)`
  height: unset!important;
  max-width: 100%;
  padding: 10px 15px!important;
  margin-bottom: 15px!important;

  & > span {
    display: flex!important;
    justify-content: space-between;
  }
`
const RadioImage = styled.img`
  max-width: 20%;
  align-self: center;
  margin-left: 15px;
`

const RadioBox = styled(RadioGroup)`
  display: flex!important;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
`
class RelayPoint extends React.Component {
  render () {
    const rpFetch = this.props.relayPointFetch
    if (rpFetch.pending) {
      return <Spin />
    }
    if (rpFetch.rejected) {
      return 'error'
    }
    if (rpFetch.fulfilled) {
      return <Fragment>
        {rpFetch.value.map(relayPoint => {
          return (
            <input type='radio' key={relayPoint.point_relais_id}
              label={relayPoint.pr_desc} name='relayPoint'
              value={relayPoint.point_relais_id}
              onChange={this.props.handleChange}
            />
          )
        })}
      </Fragment>
    }
  }
}

export default connect(props => ({
  relayPointFetch: process.env.NODE_ENV === 'production' ? `/api/commandes/points-relais` : `http://192.168.99.100:8080/api//commandes/points-relais`
}))(RelayPoint)
