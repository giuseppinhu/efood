import styled from 'styled-components'
import { color } from '../../styles'

import trash from '../../assets/images/trash.png'

export const CartItem = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  background-color: ${color.pink2};
  padding: 8px;
  margin-bottom: 8px;
  color: ${color.pink};
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${trash});
    border: none;
    background-color: transparent;
    width: 16px;
    height: 16px;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: bold;
  color: ${color.pink2};
`
