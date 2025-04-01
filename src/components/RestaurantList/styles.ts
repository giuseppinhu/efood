import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 56px;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    padding: 8px;
  }
`
