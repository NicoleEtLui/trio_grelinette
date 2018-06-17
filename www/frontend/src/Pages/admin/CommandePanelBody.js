import React from 'react'
import styled from 'styled-components'

import { colors } from '../../../style/variables'

const Legume = styled.div`
  background: ${colors.light__md};
  border-radius: 3px;
  padding: 10px 15px;
  font-weight: bold;
  font-size: 1rem;
  margin-right: 30px;
  margin-bottom: 15px;
`

const StyledBadge = styled.span`
  padding: 3px 5px;
  border-radius: 3px;
  background: ${colors.dark__dk__transparent};
  color: #fff;
  font-size: .7rem;
  font-weight: normal;
  margin-left: 10px;
`

const PanelBody = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
`

const CommandePanelBody = (
  commande
) => (
  <PanelBody>
    {/* {JSON.stringify(commande.listeLegumes)} */}
    {commande.listeLegumes.map(leg => (
      <Legume>
        {leg.label}
        <StyledBadge>
          {`${leg.nb_unite} / ${leg.unite}`}
        </StyledBadge>
      </Legume>
    ))}
  </PanelBody>
)

export default CommandePanelBody
