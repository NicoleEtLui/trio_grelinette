import React from 'react'
import { Spin, List, Card, Collapse } from 'antd'
import { connect } from 'react-refetch'
import styled from 'styled-components'

import StockPanelHeader from './StockPanelHeader'
import Basket from '../../../assets/svg/basket.svg'

const Panel = styled(Collapse.Panel)`
  padding: 0!important;
`

class Stock extends React.Component {
  render () {
    const {fetchLegumes} = this.props
    if (fetchLegumes.pending) {
      return <Spin />
    }
    if (fetchLegumes.fulfilled) {
      const dataSource = fetchLegumes.value
      const PanelStyle = (url) => ({
        backgroundImage: `url(../assets/${url})`,
        padding: '0'
      })
      return (
        // <div>{JSON.stringify(fetchLegumes.value)}</div>
        <List
          grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
          dataSource={dataSource}
          renderItem={item => (
            <List.Item>
              {/* <Card
                    title={item.label}
                    actions={[<Basket />]}
                  >
                  card content
                  </Card> */}
              <Collapse Accordion>
                <Panel
                  header={<StockPanelHeader {...item} />}
                  style={PanelStyle(item.photo)}
                  showArrow={false}
                >
                  <div>{`Description: ${item.leg_desc}`}</div>
                  <div>{`Unite: ${item.unite}`}</div>
                  <div>{`Prix: ${item.prix}`}</div>
                  <div>{`Stock: ${item.stock}`}</div>
                </Panel>
              </Collapse>
            </List.Item>
          )}
        />
      )
    }
  }
}

export default connect(props => ({
  fetchLegumes: '/api/legumes'
}))(Stock)
