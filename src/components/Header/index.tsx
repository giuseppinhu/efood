import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import brand from '../../assets/images/logo.png'
import { Brand } from '../../styles'
import * as S from './styles'

const Header = () => {
  const location = useLocation()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        {location.pathname === '/' ? (
          <>
            <Brand src={brand} alt="brand" />
            <S.Subtitle>
              Viva experiências gastronômicas no conforto da sua casa
            </S.Subtitle>
          </>
        ) : (
          <S.RestaurantHeader>
            <Link className="link" to="/">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="18px"
                  height="18px"
                  x="0"
                  y="0"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      d="M15 7h-4.83V5.414A2 2 0 0 0 6.756 4L.876 9.879a3 3 0 0 0 0 4.242L6.756 20a2 2 0 0 0 3.414-1.414V17H16a6.006 6.006 0 0 1 6 6 1 1 0 0 0 2 0v-7a9.01 9.01 0 0 0-9-9Z"
                      fill="#e66767"
                      opacity="1"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
                Restaurantes
              </span>
            </Link>
            <Brand src={brand} alt="brand" />
            <span onClick={openCart}>
              {items.length} produto(s) no carrinho
            </span>
          </S.RestaurantHeader>
        )}
      </div>
    </S.HeaderContainer>
  )
}

export default Header
