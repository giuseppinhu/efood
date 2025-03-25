import styled from 'styled-components'
import { color } from '../../styles'
import backgroundImg from '../../assets/images/fundo.png'

export const HeaderContainer = styled.header`
  padding: 84px;
  background: url(${backgroundImg});
`

export const RestaurantHeader = styled(HeaderContainer)`
  display: flex;
  align-items: center;
  padding: 0;
  font-size: 18px;
  font-weight: 900;
  color: ${color.pink};

  .link {
    text-decoration: none;
    color: ${color.pink};
  }

  svg {
    margin-right: 5px;
  }
`

export const Subtitle = styled.p`
  max-width: 539px;
  margin: 0 auto;
  margin-top: 84px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: ${color.pink};
`
