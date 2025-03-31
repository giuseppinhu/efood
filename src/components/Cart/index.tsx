import { useDispatch, useSelector } from 'react-redux'

import { CartItem, Prices } from './styles'

import { RootReducer } from '../../store'
import { remove } from '../../store/reducers/cart'
import { formatPrices, getTotalPrice } from '../../utils'

const Cart = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <>
      <ul>
        {items.map((item) => (
          <CartItem key={item.id}>
            <img src={item.foto} alt="image" />
            <div>
              <h3>{item.nome}</h3>
              <span>{formatPrices(item.preco)}</span>
            </div>
            <button type="button" onClick={() => removeItem(item.id)}></button>
          </CartItem>
        ))}
      </ul>
      <Prices>
        Valor Total:
        <span>{formatPrices(getTotalPrice(items))}</span>
      </Prices>
    </>
  )
}

export default Cart
