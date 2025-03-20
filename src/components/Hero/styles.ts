import styled from 'styled-components'
import { color } from '../../styles'

import japonesImg from '../../assets/images/japones.png'

export const HeroContainer = styled.section`
  position: relative;
  background: url(${japonesImg}) no-repeat center/cover;
  padding: 32px;
  color: ${color.white};
  font-size: 32px;
  z-index: 1;

  span {
    font-weight: 100;
  }

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: -1;
  }
`

export const Subtitle = styled.h2`
  margin-top: 156px;
`
