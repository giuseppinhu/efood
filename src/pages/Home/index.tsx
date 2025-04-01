import Loader from '../../components/Loader'
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

  return <Loader />
}

export default Home
