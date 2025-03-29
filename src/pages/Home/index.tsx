import RestaurantList from '../../components/RestaurantList'

import { useGetFeaturedRestaurantQuery } from '../../services/api'

export interface Menu {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  cardapio: Menu[]
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
