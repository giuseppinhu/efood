import { Restaurant } from '../../pages/Home'

import { HeroContainer, Subtitle } from './styles'

type Props = {
  restaurant: Restaurant
}

const Hero = ({ restaurant }: Props) => {
  return (
    <HeroContainer
      style={{
        backgroundImage: `url(${restaurant.capa})`
      }}
    >
      <div className="container">
        <p>{restaurant.tipo}</p>
        <Subtitle>{restaurant.titulo}</Subtitle>
      </div>
    </HeroContainer>
  )
}

export default Hero
