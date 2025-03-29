import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import { CartContainer, CartItem, Overlay, Prices, SideBar } from './styles'

import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  // const getTotalPrice = () => {
  //   return items.reduce((total, currentValue) => {
  //     return (total += currentValue.cardapio[0].preco!)
  //   }, 0)
  // }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="image" />
              <div>
                <h3>{item.nome}</h3>
                <span>{item.preco}</span>
              </div>
              <button
                type="button"
                onClick={() => removeItem(item.id)}
              ></button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor Total:
          {/* <span>{formatPrices(getTotalPrice())}</span> */}
        </Prices>
        <Button type="button">Continuar a entrega</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
