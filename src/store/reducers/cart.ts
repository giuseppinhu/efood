import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Restaurant } from '../../pages/Home'

type CartState = {
  items: Restaurant[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Restaurant>) => {
      const prate = state.items.find(
        (item) => item.cardapio[0].id === action.payload.id
      )

      if (!prate) {
        state.items.push(action.payload)
      } else {
        return alert('Prato já adicionado ao carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
