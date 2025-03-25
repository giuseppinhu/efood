import styled from 'styled-components'
import { ButtonStyle } from '../Button/styles'
import { color } from '../../styles'

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
`

export const Modal = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  .overlay {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: -1;
  }

  ${ButtonStyle} {
    max-width: 218px;
    margin-top: 16px;
  }

  &.show {
    display: flex;
  }
`

export const ModalContent = styled.div`
  display: flex;
  padding: 32px;
  background-color: ${color.pink};
  color: ${color.pink2};
  position: relative;

  .close {
    display: block;
    max-width: 16px;
    height: 16px;
    margin: auto 0;
    right: 30px;
    position: absolute;
    cursor: pointer;
  }

  img {
    display: block;
    margin-right: 24px;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`
