import { Menu as MenuProps } from '../../pages/Home'

import ItemMenu from '../ItemMenu'
import { MenuList } from './styles'

type Props = {
  menu: MenuProps[]
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
                price={item.preco}
              />
            </li>
          ))}
        </MenuList>
      </div>
    </div>
  )
}

export default Menu
