import Button from '../Button'
import { Card, Description, Title } from './styles'

export type Props = {
  img: string
  title: string
  description: string
}

const ItemMenu = ({ img, title, description }: Props) => (
  <Card>
    <img src={img} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button type="button">Adicionar ao Carrinho</Button>
  </Card>
)

export default ItemMenu
