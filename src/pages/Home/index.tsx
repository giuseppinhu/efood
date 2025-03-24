import { useEffect, useState } from 'react'

import RestaurantList from '../../components/RestaurantList'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  cardapio: [
    {
      foto: string
      preco: string
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <RestaurantList restaurant={restaurant} />
    </>
  )
}

export default Home
