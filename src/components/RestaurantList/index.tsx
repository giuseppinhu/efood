import RestaurantElement from '../Restaurant'
import { List } from './styles'

type Props = {
  restaurant: Restaurant[]
}

const RestaurantList = ({ restaurant }: Props) => (
  <div className="container">
    <List>
      {restaurant.map((restaurant) => (
        <RestaurantElement
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.titulo}
          avaliation={restaurant.avaliacao}
          description={restaurant.descricao}
          img={restaurant.capa}
          infos={restaurant.tipo}
          highlight={restaurant.destacado}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
