import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  font-weight: bold;
  background: rgba(255, 255,255, .75);
  padding: 0;
`

const StockPanelHeader = (
  item
) => (
  <Label>{item.label}</Label>
)

export default StockPanelHeader
