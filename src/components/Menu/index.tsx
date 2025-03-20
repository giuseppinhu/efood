import ItemMenu from '../ItemMenu'
import { MenuList } from './styles'

const Menu = () => (
  <div>
    <div className="container">
      <MenuList>
        <li>
          <ItemMenu />
        </li>
        <li>
          <ItemMenu />
        </li>
        <li>
          <ItemMenu />
        </li>
        <li>
          <ItemMenu />
        </li>
        <li>
          <ItemMenu />
        </li>
        <li>
          <ItemMenu />
        </li>
      </MenuList>
    </div>
  </div>
)

export default Menu
