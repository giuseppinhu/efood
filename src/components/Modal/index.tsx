import { useDispatch } from 'react-redux'

import close from '../../assets/images/close.png'

import Button from '../Button'
import { ModalContent, ModalDiv } from './style'
import { Description, Title } from '../ItemMenu/styles'
import { formatPrices } from '../../utils'

import { open, add } from '../../store/reducers/cart'
import { Menu } from '../../pages/Home'

type Props = {
  id: number
  nome: string
  foto: string
  descricao: string
  preco: number
  porcao: string
  closeModal: () => void
}

const Modal = ({
  id,
  nome,
  foto,
  descricao,
  preco,
  porcao,
  closeModal
}: Props) => {
  const item: Menu = { id, nome, foto, descricao, preco, porcao }

  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(add(item))
    closeModal()
    dispatch(open())
  }

  return (
    <ModalDiv className="show">
      <ModalContent className="container">
        <img className="close" src={close} alt="close" onClick={closeModal} />
        <img src={foto} />
        <div>
          <Title>{nome}</Title>
          <Description>{descricao}</Description>
          <span>Serve: de {porcao}</span>
          <Button
            type="button"
            onClick={addItem}
          >{`Adicionar ao carrinho - ${formatPrices(preco)}`}</Button>
        </div>
      </ModalContent>
      <div className="overlay" onClick={closeModal}></div>
    </ModalDiv>
  )
}

export default Modal
