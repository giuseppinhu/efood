import { useState } from 'react'
import { useDispatch } from 'react-redux'

import close from '../../assets/images/close.png'

import Button from '../Button'
import { ModalContent, ModalDiv } from './style'
import { Description, Title } from '../ItemMenu/styles'

import { open, add } from '../../store/reducers/cart'

type Props = {
  id: number
  name: string
  foto: string
  descricao: string
  preco: number
  adicionar: () => void
}

const Modal = () => {
  const [modalIsOpen, setModaIsOpen] = useState(true)

  const dispatch = useDispatch()

  const closeModal = () => {
    return setModaIsOpen(false)
  }

  const addItem = () => {
    // dispatch(add())
    closeModal()
    dispatch(open())
  }

  return (
    <ModalDiv className={modalIsOpen ? 'show' : ''}>
      <ModalContent className="container">
        <img
          className="close"
          src={close}
          alt="close"
          onClick={() => closeModal()}
        />
        {/* <img src={img} /> */}
        <div>
          <Title>teste</Title>
          <Description>teste</Description>
          <span>Serve: de teste</span>
          <Button
            type="button"
            onClick={addItem}
          >{`Adicionar ao carrinho - teste`}</Button>
        </div>
      </ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </ModalDiv>
  )
}

export default Modal
