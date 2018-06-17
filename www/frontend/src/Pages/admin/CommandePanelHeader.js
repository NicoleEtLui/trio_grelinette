import React from 'react'
import styled from 'styled-components'

const HeaderElement = styled.div`
  font-weight: medium;
`

const Flex = styled.div`
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding-right: 15px;
`

const CommandePanelHeader = (
  commande
) => (
  <Flex>
    <HeaderElement>{commande.cli_name}</HeaderElement>
    <HeaderElement>{commande.date_com}</HeaderElement>
    <HeaderElement>{commande.cli_tel}</HeaderElement>
    <HeaderElement>{`Point-relais: ${commande.point_relais_id}`}</HeaderElement>
  </Flex>
)

export default CommandePanelHeader
