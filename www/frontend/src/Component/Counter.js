
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Plus from '../../assets/svg/add.svg'
import Minus from '../../assets/svg/remove.svg'
import { colors } from '../../style/variables'

const CardButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const CardButton = styled.button`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  width: 30px;
  height: 30px;
  background: ${colors.dark__md};
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, .1);
  color: #fff;
  font-weight: bold;
  transition: background .2s;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: ${colors.dark__dk}
  }
`

const StyleButtonIcon = {
  width: '11px',
  height: '11px',
  fill: '#fff'
}

class Counter extends Component {
  constructor (props) {
    super(props)
    this.state = { value: this.props.productQuantity }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment (e) {
    this.setState(prevState => ({
      value: Number(prevState.value) + 1
    }), () => {
      this.props.updateQuantity(this.state.value)
    })
    e.preventDefault()
  }

  decrement (e) {
    e.preventDefault()
    if (this.state.value <= 1) { return this.state.value }
    else {
      this.setState(prevState => ({
        value: Number(prevState.value) - 1
      }), () => {
        this.props.updateQuantity(this.state.value)
      })
    }
  }

  render () {
    return (
      <CardButtonGroup>
        <CardButton onClick={this.decrement} ><Minus style={StyleButtonIcon} /></CardButton>
        <CardButton>{this.state.value}</CardButton>
        <CardButton onClick={this.increment}>
          <Plus style={StyleButtonIcon} />
        </CardButton>
      </CardButtonGroup>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number
}

export default Counter
