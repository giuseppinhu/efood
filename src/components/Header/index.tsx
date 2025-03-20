import { useLocation } from 'react-router-dom'

import brand from '../../assets/images/logo.png'
import { Brand } from '../../styles'
import { HeaderContainer, RestaurantHeader, Subtitle } from './styles'

const Header = () => {
  const location = useLocation()

  return (
    <HeaderContainer>
      <div className="container">
        {location.pathname === '/' ? (
          <>
            <Brand src={brand} alt="brand" />
            <Subtitle>
              Viva experiências gastronômicas no conforto da sua casa
            </Subtitle>
          </>
        ) : (
          <RestaurantHeader>
            <span>Restaurantes</span>
            <Brand src={brand} alt="brand" />
            <span>0 produto(s) no carrinho</span>
          </RestaurantHeader>
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header
