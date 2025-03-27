import { useDispatch, useSelector } from 'react-redux'

import japa from '../../assets/images/japones.png'
import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, SideBar } from './styles'
import { RootReducer } from '../../store'

import { close } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) =>
            item.cardapio.map((cardaItem) => (
              <CartItem key={cardaItem.id}>
                <img src={cardaItem.foto} alt="image" />
                <div>
                  <h3>{cardaItem.nome}</h3>
                  <span>{cardaItem.preco}</span>
                </div>
                <button type="button"></button>
              </CartItem>
            ))
          )}
        </ul>
        <Prices>
          Valor Total:
          <span>R$ 182,00</span>
        </Prices>
        <Button type="button">Continuar a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
