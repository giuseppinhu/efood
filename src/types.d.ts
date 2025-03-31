declare interface Menu {
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

  cardapio: Menu[]
}

declare type Product = {
  id: number
  price: number
}

declare type PurchasePayload = {
  product: Product[]
  delivery: {
    receiver: string
  }
  address: {
    description: string
    city: string
    zipcode: string
    number: number
    complement?: string
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      experies: {
        month: number
        year: number
      }
    }
  }
}
