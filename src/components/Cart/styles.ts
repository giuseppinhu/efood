import styled from 'styled-components'
import { color } from '../../styles'

import trash from '../../assets/images/trash.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  display: none;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: ${color.pink};
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
  z-index: 1;
`

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
