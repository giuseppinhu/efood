import { useDispatch } from 'react-redux'
import { useState } from 'react'

import Button from '../Button'
import close from '../../assets/images/close.png'
import { Card, Description, Modal, ModalContent, Title } from './styles'
import { Restaurant } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

export type Props = {
  restaurant: Restaurant
  img: string
  title: string
  description: string
  id: number
  porcao: string
  price: string
}

const ItemMenu = ({
  img,
  title,
  description,
  porcao,
  price,
  restaurant
}: Props) => {
  const [modalIsOpen, setModaIsOpen] = useState(false)

  const dispatch = useDispatch()

  const closeModal = () => {
    return setModaIsOpen(false)
  }

  const formatPrices = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const addItem = () => {
    dispatch(add(restaurant))
    closeModal()
    dispatch(open())
  }

  return (
    <>
      <Card>
        <img src={img} />
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button type="button" onClick={() => setModaIsOpen(true)}>
          + Detalhes sobre o prato
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
            <Button
              type="button"
              onClick={addItem}
            >{`Adicionar ao carrinho - ${formatPrices(Number(price))}`}</Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default ItemMenu
