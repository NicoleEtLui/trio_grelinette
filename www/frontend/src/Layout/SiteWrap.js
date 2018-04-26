import React from 'react'
import styled from 'styled-components'
import { Grid } from 'react-styled-flexboxgrid'

const SiteWrap = styled(props => (
  <Grid fluid className={props.className}>
    {props.children}
  </Grid>
))`
  max-width: 1080px;
  width: 100%;
`
export default SiteWrap
