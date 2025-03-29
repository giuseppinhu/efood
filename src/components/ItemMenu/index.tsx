import Button from '../Button'
import Modal from '../Modal'
import { Card, Description, Title } from './styles'

export type Props = {
  id: number
  name: string
  img: string
  description: string
  portion: string
  price: string
}

const ItemMenu = ({ img, name, description }: Props) => {
  return (
    <>
      <Card>
        <img src={img} />
        <Title>{name}</Title>
        <Description>{description}</Description>
        <Button type="button" onClick={() => console.log('Corinthians')}>
          + Detalhes sobre o prato
        </Button>
      </Card>
      <Modal />
    </>
  )
}

export default ItemMenu
