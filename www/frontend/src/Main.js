import React from 'react'
import {ThemeProvider} from 'styled-components'
import {Grid, Col, Row} from 'react-styled-flexboxgrid'
import ListCards from './Container/ListCards'

import SiteWrap from './Layout/SiteWrap'

const Red = {
  background: 'red',
  height: '200px',
  margin: '30px'
}

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
}

const Main = () =>
  <SiteWrap>
    <ThemeProvider theme={theme}>
      <Grid>
        <Row>
          <Col lg={9} style={Red}>
            <ListCards />
          </Col>
          <Col lg={3} style={Red}>
            Panier
          </Col>
        </Row>
      </Grid>
    </ThemeProvider>
  </SiteWrap>

export default Main
