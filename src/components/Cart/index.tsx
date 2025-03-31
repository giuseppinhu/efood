import { useDispatch, useSelector } from 'react-redux'

import { remove } from '../../store/reducers/cart'
import { RootReducer } from '../../store'
import { formatPrices, getTotalPrice } from '../../utils'

import * as S from './styles'

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
          <S.CartItem key={item.id}>
            <img src={item.foto} alt="image" />
            <div>
              <h3>{item.nome}</h3>
              <span>{formatPrices(item.preco)}</span>
            </div>
            <button type="button" onClick={() => removeItem(item.id)}></button>
          </S.CartItem>
        ))}
      </ul>
      <S.Prices>
        Valor Total:
        <span>{formatPrices(getTotalPrice(items))}</span>
      </S.Prices>
    </>
  )
}

export default Cart
