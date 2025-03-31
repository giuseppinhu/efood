import RestaurantList from '../../components/RestaurantList'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data: RestaurantData } = useGetFeaturedRestaurantQuery()

  if (RestaurantData) {
    return (
      <>
        <RestaurantList restaurant={RestaurantData} />
      </>
    )
  }

  return <h3>Carregando...</h3>
}

export default Home
