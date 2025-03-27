import Hero from '../../components/Hero'
import Menu from '../../components/Menu'

import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'

const Restaurants = () => {
  const { id } = useParams()
  const { data: restaurant } = useGetMenuQuery(id!)

  if (!restaurant) {
    return <h1>Carregando...</h1>
  }

  return (
    <>
      <Hero restaurant={restaurant} />
      <Menu restaurant={restaurant} />
    </>
  )
}

export default Restaurants
