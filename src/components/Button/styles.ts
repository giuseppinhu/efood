import styled from 'styled-components'
import { color } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${color.pink};
  border: none;
  color: ${color.white};
  text-decoration: none;
`

export const ButtonStyle = styled.button`
  display: block;
  width: 100%;
  padding: 4px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${color.pink2};
  border: none;
  color: ${color.pink};
`
