import styled from 'styled-components'
import { color } from '../../styles'
import { TagContainer } from '../Tags/styles'

export const Card = styled.div`
  position: relative;
  margin-bottom: 40px;
  font-size: 18px;
  color: ${color.pink};
  background-color: ${color.white};
  border: 1px solid ${color.pink};

  .cardcontainer {
    padding: 8px;
  }

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h3`
  font-size: 18px;
`

export const Avaliation = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-right: 8px;
  }
`

export const Description = styled.p`
  font-size: 14px;
  margin: 16px 0;
`
