import RestaurantClass from '../../models/Restaurant'

import japones from '../../assets/images/japones.png'
import Hero from '../../components/Hero'
import Menu from '../../components/Menu'

const principal: RestaurantClass[] = [
  {
    id: 1,
    name: 'Hioki Sushi',
    avaliation: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: japones,
    infos: ['Destaque da Semana', 'Japonesa']
  },
  {
    id: 2,
    name: 'Hioki Sushi',
    avaliation: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: japones,
    infos: ['Japonesa']
  },
  {
    id: 3,
    name: 'Hioki Sushi',
    avaliation: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: japones,
    infos: ['Japonesa']
  },
  {
    id: 4,
    name: 'Hioki Sushi',
    avaliation: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: japones,
    infos: ['Japonesa']
  },
  {
    id: 5,
    name: 'Hioki Sushi',
    avaliation: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: japones,
    infos: ['Japonesa']
  },
  {
    id: 6,
    name: 'Hioki Sushi',
    avaliation: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    img: japones,
    infos: ['Japonesa']
  }
]

const Restaurants = () => (
  <>
    <Hero restaurant={principal} />
    <Menu />
  </>
)

export default Restaurants
