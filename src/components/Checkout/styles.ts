import styled from 'styled-components'
import { color } from '../../styles'
import { ButtonStyle } from '../Button/styles'

type InputProp = {
  maxWidth?: string
}

export const CheckoutContainer = styled.div`
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

  .text-empty {
    display: flex;
    justify-content: center;
    align-item: center;
    height: 100%;
    flex-direction: column;

    h4 {
      color: ${color.pink2};
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 8px;
      text-align: center;
      margin: 24px 0;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`

export const Content = styled.div`
  margin-bottom: 24px;

  h2 {
    font-weight: bold;
    font-size: 16px;
    color: ${color.pink2};
    margin-bottom: 8px;
  }

  ${ButtonStyle} {
    margin-bottom: 8px;
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`

export const InputGroup = styled.div<InputProp>`
  flex: 1;
  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-top: 8px;

  &.margin-bottom {
    margin-bottom: 24px;
  }

  label {
    font-weight: bold;
    font-size: 14px;
    color: ${color.pink2};
  }

  input {
    display: block;
    height: 32px;
    width: 100%;
    background-color: ${color.pink2};
    border: 1px solid ${color.pink2};
    margin-top: 8px;
  }
`

export const Display = styled.div`
  display: none;

  &.show {
    display: block;
  }
`
