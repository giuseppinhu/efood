import * as S from './styles'

type Props = {
  restaurant: Restaurant
}

const Hero = ({ restaurant }: Props) => {
  return (
    <S.HeroContainer
      style={{
        backgroundImage: `url(${restaurant.capa})`
      }}
    >
      <div className="container">
        <p>{restaurant.tipo}</p>
        <S.Subtitle>{restaurant.titulo}</S.Subtitle>
      </div>
    </S.HeroContainer>
  )
}

export default Hero
