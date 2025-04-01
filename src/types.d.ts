declare interface MenuProps {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

declare type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string

  cardapio: MenuProps[]
}

declare type Product = {
  id: number
  price: number
}

declare type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      city: string
      zipCode: string
      number: number
      description?: string
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}
