import RestaurantList from '../../components/RestaurantList'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

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
      id: number
      foto: string
      preco: string
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

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
