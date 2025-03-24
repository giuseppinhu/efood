import styled from 'styled-components'
import { color } from '../../styles'

export const Card = styled.div`
  height: 100%;
  padding: 8px;
  background-color: ${color.pink};
  color: ${color.pink2};

  img {
    max-width: 304px;
    max-height: 164px;
    width: 100%;
    object-fit: cover;
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
`

export const Description = styled.p`
  margin: 8px 0;
  line-height: 22px;
  font-size: 14px;
  height: 42%;
`
