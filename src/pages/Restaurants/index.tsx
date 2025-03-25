import { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import Menu from '../../components/Menu'

import { Restaurant } from '../Home'
import { useParams } from 'react-router-dom'

const Restaurants = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h1>Carregnado</h1>
  }

  return (
    <>
      <Hero restaurant={restaurant} />
      <Menu restaurant={restaurant} />
    </>
  )
}

export default Restaurants
