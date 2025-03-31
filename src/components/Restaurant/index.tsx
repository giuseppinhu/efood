import Tag from '../Tags'
import star from '../../assets/images/estrela.png'

import * as S from './styles'

import Button from '../Button'

type Props = {
  id: number
  name: string
  img: string
  infos: string
  avaliation: number
  description: string
  highlight: boolean
}

const RestaurantElement = ({
  id,
  name,
  img,
  infos,
  avaliation,
  description,
  highlight
}: Props) => (
  <S.Card>
    <img src={img} alt={name} className="card-img" />
    <div className="cardcontainer">
      <S.Infos>
        <Tag>{infos}</Tag>
        {highlight && <Tag>destaque da Semana</Tag>}
      </S.Infos>
      <S.CardHeader>
        <S.Title>{name}</S.Title>
        <S.Avaliation>
          <span>{avaliation}</span>
          <img src={star} />
        </S.Avaliation>
      </S.CardHeader>
      <S.Description>{description}</S.Description>
      <Button type="link" to={`/restaurantes/${id}`}>
        Saiba Mais
      </Button>
    </div>
  </S.Card>
)
export default RestaurantElement
