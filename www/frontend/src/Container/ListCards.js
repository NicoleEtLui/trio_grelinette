import React from 'react'
import { connect } from 'react-refetch'
import { Card, Spin } from 'antd'

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
        // return <Card key={index} title={leg.label} extra={<a href='#'>More</a>} style={{ width: 300 }}>
        //   <p>Card content</p>
        //   <p>Card content</p>
        //   <p>Card content</p>
        // </Card>
      })
    return listCards
  }
}
// legumesFetch.pending ? 'loading'
//   : legumesFetch.rejected ? 'error'
//     : legumesFetch.fulfilled ? 'fetched' : ''

export default connect(props => ({
  legumesFetch: `https://www.triogrelinette.be/api/legumes`
}))(ListCards)
