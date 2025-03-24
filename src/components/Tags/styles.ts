import styled from 'styled-components'
import { color } from '../../styles'

export const TagContainer = styled.div`
  display: inline-block;
  background-color: ${color.pink};
  padding: 6px 10px;
  font-size: 12px;
  font-weight: bold;
  color: ${color.white2};

  &::first-letter {
    text-transform: uppercase;
  }
`
