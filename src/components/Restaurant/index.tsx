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
  name: string
  img: string
  infos: string[]
  avaliation: string
  description: string
}

const Restaurant = ({ name, img, infos, avaliation, description }: Props) => (
  <Card>
    <img src={img} alt={name} />
    <div className="cardcontainer">
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <CardHeader>
        <Title>{name}</Title>
        <Avaliation>
          <span>{avaliation}</span>
          <img src={star} />
        </Avaliation>
      </CardHeader>
      <Description>{description}</Description>
      <Button type="link" to="/restaurantes">
        Saiba Mais
      </Button>
    </div>
  </Card>
)
export default Restaurant
