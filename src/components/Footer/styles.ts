import styled from 'styled-components'
import { Brand } from '../../styles'
import { color } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${color.pink2};
  padding: 40px;

  ${Brand} {
    margin-bottom: 32px;
  }
`

export const ListSocial = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 88px;
  margin: 0 auto;

  a {
    margin: 0 8px;
  }
`

export const CopyRight = styled.p`
  color: ${color.pink};
  max-width: 480px;
  margin: 0 auto;
  font-size: 10px;
  text-align: center;
  margin-top: 40px;
`
