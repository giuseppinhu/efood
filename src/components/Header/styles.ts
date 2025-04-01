import styled from 'styled-components'
import { breakpoint, color } from '../../styles'
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
  justify-content: space-between;
  width: 100%;

  .link {
    text-decoration: none;
    color: ${color.pink};
  }

  svg {
    margin-right: 5px;
  }

  span {
    cursor: pointer;
  }

  @media (max-width: ${breakpoint.tablet}) {
    display: block;

    span {
      display: block;
      text-align: center;
      margin-top: 24px;
    }

    .button-home {
      display: none;
    }
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
