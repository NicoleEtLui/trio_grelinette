
import React from 'react'
import styled from 'styled-components'

import { Card } from 'antd'

import Counter from './Counter'
import { colors } from '../../style/variables'

const StyledCard = styled(Card)`
  border: ${colors.dark__md} 1px solid;
  margin-bottom: 30px !important;
`

const StyledImg = styled.img`
  height: 130px;
  object-fit: cover;
`

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`

const CardUnit = styled.div`
  font-size: 12px;
  text-align: center;
  margin-top: 15px;
`

const CardLayout = ({
  legume,
  productQuantity,
  updateQuantity
}) => (
  <StyledCard
    cover={<StyledImg alt='example' src={`./assets/${legume.photo}`} />}
    bordered={false}
    bodyStyle={{padding: '5px 10px'}}
    legume={legume}
  >
    <CardTitle>{legume.label}</CardTitle>
    <Counter
      productQuantity={productQuantity}
      updateQuantity={updateQuantity}
      legume={legume}
    />
    <CardUnit>{legume.prix} €/ {legume.unite}</CardUnit>
  </StyledCard>
)

export default CardLayout
