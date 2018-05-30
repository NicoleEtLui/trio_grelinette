
import React, { Fragment } from 'react'
import { connect } from 'react-refetch'
import { Spin } from 'antd'
import styled from 'styled-components'

import { colors } from '../../style/variables'

const LabelRadioGroup = styled.div`
  font-weight: bold;
`
const RadioGroup = styled.div`
  margin-bottom: 15px;
  border-radius: 3px;
  border: 1px solid ${colors.dark__md};
`

const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  transition: background .2s;
  width: 100%;

  & > img {
    max-width: 20%;
  }
`

const StyledInput = styled.input`
  &:checked ~ label {
    background: ${colors.dark__md};
    color: #fff;
  }
  display: none;
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
        <LabelRadioGroup>Sélectionnez un point de dépôt</LabelRadioGroup>
        {rpFetch.value.map(relayPoint => {
          return (
            <RadioGroup key={relayPoint.point_relais_id}>
              <StyledInput type='radio'
                name='relayPoint'
                id={relayPoint.point_relais_id}
                value={relayPoint.point_relais_id}
                onChange={this.props.handleChange}
              />
              <StyledLabel htmlFor={relayPoint.point_relais_id}>
                {relayPoint.pr_desc}
                <img src='./assets/carottes.jpg' />
              </StyledLabel>
            </RadioGroup>
          )
        })}
      </Fragment>
    }
  }
}

export default connect(props => ({
  relayPointFetch: process.env.NODE_ENV === 'production' ? `/api/commandes/points-relais` : `http://192.168.99.100:8080/api//commandes/points-relais`
}))(RelayPoint)
