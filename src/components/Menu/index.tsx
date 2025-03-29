import { Menu as MenuProps } from '../../pages/Home'

import ItemMenu from '../ItemMenu'
import { MenuList } from './styles'

type Props = {
  menu: MenuProps[]
}

export const formatPrices = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

const Menu = ({ menu }: Props) => {
  return (
    <div>
      <div className="container">
        <MenuList>
          {menu.map((item) => (
            <li key={item.id}>
              <ItemMenu
                id={item.id}
                name={item.nome}
                img={item.foto}
                description={item.descricao}
                portion={item.porcao}
                price={formatPrices(item.preco)}
              />
            </li>
          ))}
        </MenuList>
      </div>
    </div>
  )
}

export default Menu
