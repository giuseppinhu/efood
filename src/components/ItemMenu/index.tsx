import { useState } from 'react'

import Button from '../Button'
import Modal from '../Modal'

import * as S from './styles'

export type Props = {
  id: number
  name: string
  img: string
  description: string
  portion: string
  price: number
}

const ItemMenu = ({ img, name, description, id, portion, price }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <S.Card>
        <img src={img} />
        <S.Title>{name}</S.Title>
        <S.Description>{description}</S.Description>
        <Button type="button" onClick={openModal}>
          + Detalhes sobre o prato
        </Button>
      </S.Card>

      {modalIsOpen && (
        <Modal
          id={id}
          descricao={description}
          foto={img}
          nome={name}
          porcao={portion}
          preco={price}
          closeModal={closeModal}
        />
      )}
    </>
  )
}

export default ItemMenu
