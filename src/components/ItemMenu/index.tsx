import Button from '../Button'
import { Card, Description, Modal, ModalContent, Title } from './styles'
import close from '../../assets/images/close.png'
import { useState } from 'react'

export type Props = {
  img: string
  title: string
  description: string
  id: number
  porcao: string
}

const ItemMenu = ({ img, title, description, porcao }: Props) => {
  const [modalIsOpen, setModaIsOpen] = useState(false)

  const closeModal = () => {
    return setModaIsOpen(false)
  }

  return (
    <>
      <Card>
        <img src={img} alt={title} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button type="button" onClick={() => setModaIsOpen(true)}>
          Adicionar ao Carrinho
        </Button>
      </Card>
      <Modal className={modalIsOpen ? 'show' : ''}>
        <ModalContent className="container">
          <img
            className="close"
            src={close}
            alt="close"
            onClick={() => closeModal()}
          />
          <img src={img} />
          <div>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <span>Serve: de {porcao}</span>
            <Button type="button">Adicionar ao Carrinho - 00,00</Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default ItemMenu
