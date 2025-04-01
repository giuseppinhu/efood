import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const MenuList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 120px;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    padding: 8px;
  }
`
