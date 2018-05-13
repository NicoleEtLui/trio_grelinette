import React from 'react'
import { connect } from 'react-refetch'
import { Card, Spin } from 'antd'
import { Col } from 'react-styled-flexboxgrid'
import styled from 'styled-components'

import Plus from '../../assets/svg/add.svg'
import Minus from '../../assets/svg/remove.svg'
import { colors } from '../../style/variables'

const StyledCard = styled(Card)`
  border: ${colors.dark__md} 1px solid;
  margin-bottom: 30px !important;
`

const CardTitle = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
`

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

  &:hover {
    cursor: pointer;
  }
`

const StyleButtonIcon = {
  width: '11px',
  height: '11px',
  fill: '#fff'
}

const CardUnit = styled.div`
  font-size: 12px;
  text-align: center;
`

const ListCards = ({legumesFetch}) => {
  if (legumesFetch.pending) {
    return <Spin />
  }
  if (legumesFetch.rejected) {
    return 'error'
  }
  if (legumesFetch.fulfilled) {
    let listCards = legumesFetch
      .value
      .map((leg, index) => {
        return <Col xs={4} key={index}>
          <StyledCard
            cover={<img alt='example' src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' />}
            // title={leg.label}
            // extra={<a href='#'>More</a>}
            bordered={false}
            bodyStyle={{padding: '5px 10px'}}
          >
            <CardTitle>{leg.label}</CardTitle>
            <CardButtonGroup>
              <CardButton><Minus style={StyleButtonIcon} /></CardButton>
              <CardButton>0</CardButton>
              <CardButton><Plus style={StyleButtonIcon} /></CardButton>
            </CardButtonGroup>
            <CardUnit>leg.unit</CardUnit>
          </StyledCard>
        </Col>
      })
    return listCards
  }
}

export default connect(props => ({
  legumesFetch: `http://192.168.99.100:8080/api/legumes`
}))(ListCards)
