class RestaurantClass {
  id: number
  name: string
  img: string
  infos: string[]
  avaliation: string
  description: string

  constructor(
    id: number,
    name: string,
    img: string,
    infos: string[],
    avaliation: string,
    description: string
  ) {
    this.id = id
    this.name = name
    this.img = img
    this.infos = infos
    this.avaliation = avaliation
    this.description = description
  }
}

export default RestaurantClass
