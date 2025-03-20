import RestaurantClass from '../../models/Restaurant'

import { HeroContainer, Subtitle } from './styles'

type Props = {
  restaurant: RestaurantClass[]
}

const Hero = ({ restaurant }: Props) => {
  const nameRest = restaurant.find((element) => element.name)?.name
  const infoRest = restaurant.find((element) => element.infos[1])?.infos[1]

  return (
    <HeroContainer>
      <div className="container">
        <span>{infoRest}</span>
        <Subtitle>{nameRest}</Subtitle>
      </div>
    </HeroContainer>
  )
}

export default Hero
