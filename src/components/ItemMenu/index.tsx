import Button from '../Button'
import { Card, Description, Title } from './styles'

const ItemMenu = () => (
  <Card>
    <img src="//placehold.co/305x167" alt="" />
    <Title>Nome do prato</Title>
    <Description>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
      voluptatem at explica/bo ab ullam dolorem fugit tempore sit similique quo
      commodi odit, obcaecati quibusdam sequi labore aperiam porro quidem
      dolores.
    </Description>
    <Button type="button">Adicionar ao Carrinho</Button>
  </Card>
)

export default ItemMenu
