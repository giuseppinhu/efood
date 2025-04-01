import styled from 'styled-components'
import { breakpoint, color } from '../../styles'

export const Card = styled.div`
  height: 100%;
  padding: 8px;
  background-color: ${color.pink};
  color: ${color.pink2};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-width: 304px;
    max-height: 164px;
    width: 100%;
    object-fit: cover;

    @media (max-width: ${breakpoint.tablet}) {
      max-width: 100%;
    }
  }
`

export const Title = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin-top: 10px;
`

export const Description = styled.p`
  margin: 8px 0;
  line-height: 22px;
  font-size: 14px;
  text-align: justify;
`
