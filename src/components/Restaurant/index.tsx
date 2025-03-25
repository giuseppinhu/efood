import Tag from '../Tags'
import star from '../../assets/images/estrela.png'

import {
  Card,
  Description,
  Title,
  Avaliation,
  Infos,
  CardHeader
} from './styles'

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
  <Card>
    <img src={img} alt={name} className="card-img" />
    <div className="cardcontainer">
      <Infos>
        <Tag>{infos}</Tag>
        {highlight && <Tag>destaque da Semana</Tag>}
      </Infos>
      <CardHeader>
        <Title>{name}</Title>
        <Avaliation>
          <span>{avaliation}</span>
          <img src={star} />
        </Avaliation>
      </CardHeader>
      <Description>{description}</Description>
      <Button type="link" to={`/restaurantes/${id}`}>
        Saiba Mais
      </Button>
    </div>
  </Card>
)
export default RestaurantElement
