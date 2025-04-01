import { useDispatch } from 'react-redux'

import Button from '../Button'
import close from '../../assets/images/close.png'

import { formatPrices } from '../../utils'
import { open, add } from '../../store/reducers/cart'

import { Description, Title } from '../ItemMenu/styles'
import * as S from './style'

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
  const item: MenuProps = { id, nome, foto, descricao, preco, porcao }

  const dispatch = useDispatch()

  const addItem = () => {
    dispatch(add(item))
    closeModal()
    dispatch(open())
  }

  return (
    <S.ModalDiv className="show">
      <S.ModalContent className="container">
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
      </S.ModalContent>
      <div className="overlay" onClick={closeModal}></div>
    </S.ModalDiv>
  )
}

export default Modal
