import { Restaurant } from '../../pages/Home'
import ItemMenu from '../ItemMenu'

import { MenuList } from './styles'

type Props = {
  restaurant: Restaurant
}

const Menu = ({ restaurant }: Props) => {
  return (
    <div>
      <div className="container">
        <MenuList>
          {restaurant.cardapio.map((item, index) => (
            <li key={index}>
              <ItemMenu
                id={item.id}
                title={item.nome}
                img={item.foto}
                description={item.descricao}
                porcao={item.porcao}
              />
            </li>
          ))}
        </MenuList>
      </div>
    </div>
  )
}

export default Menu
