import Hero from '../../components/Hero'
import Menu from '../../components/Menu'

import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Restaurants = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetMenuQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    <>
      <Hero restaurant={restaurant} />
      <Menu menu={restaurant.cardapio} />
    </>
  )
}

export default Restaurants
