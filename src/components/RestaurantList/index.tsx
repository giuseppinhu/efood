import Restaurant from '../Restaurant'
import { List } from './styles'
import RestaurantClass from '../../models/Restaurant'

type Props = {
  restaurant: RestaurantClass[]
}

const RestaurantList = ({ restaurant }: Props) => (
  <div className="container">
    <List>
      {restaurant.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          name={restaurant.name}
          avaliation={restaurant.avaliation}
          description={restaurant.description}
          img={restaurant.img}
          infos={restaurant.infos}
        />
      ))}
    </List>
  </div>
)

export default RestaurantList
