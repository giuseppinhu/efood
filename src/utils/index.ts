export const formatPrices = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (item: Menu[]) => {
  return item.reduce((total, currentValue) => {
    if (currentValue.preco) {
      return (total += currentValue.preco)
    }
    return 0
  }, 0)
}
