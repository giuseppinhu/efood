import styled from 'styled-components'
import { breakpoint, color } from '../../styles'
import { ButtonStyle } from '../Button/styles'

export const ModalDiv = styled.div`
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

  @media (max-width: ${breakpoint.tablet}) {
    padding: 8px;
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
  }

  img {
    display: block;
    margin-right: 24px;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoint.tablet}) {
    flex-direction: column;
    padding: 8px;

    img {
      width: 100%;
    }
  }
`
