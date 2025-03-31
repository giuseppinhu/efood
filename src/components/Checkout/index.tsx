import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Cart from '../Cart'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'

import * as S from './styles'
import { formatPrices, getTotalPrice } from '../../utils'
import { useState } from 'react'

type skipCartProp = {
  stateNow: React.Dispatch<React.SetStateAction<boolean>>
  stateNext: React.Dispatch<React.SetStateAction<boolean>>
}

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [menuCart, setMenuCart] = useState(true)
  const [addressCart, setAddressCart] = useState(false)
  const [paymentCart, setPaymentCart] = useState(false)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const skipCart = ({ stateNow, stateNext }: skipCartProp) => {
    stateNow(false)
    stateNext(true)
  }

  return (
    <S.CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length > 0 ? (
          <>
            <S.Display className={menuCart ? 'show' : ''}>
              <Cart />
              <Button
                type="button"
                onClick={() =>
                  skipCart({ stateNow: setMenuCart, stateNext: setAddressCart })
                }
              >
                Continuar a entrega
              </Button>
            </S.Display>

            <form>
              <S.Display className={addressCart ? 'show' : ''}>
                <S.Content>
                  <h2>Entrega</h2>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input name="fullName" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input name="address" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input name="city" />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="cep">CEP</label>
                      <input name="cep" />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="houseNumber">Número</label>
                      <input name="houseNumber" />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup className="margin-bottom">
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input name="complement" />
                  </S.InputGroup>
                  <Button
                    type="button"
                    onClick={() =>
                      skipCart({
                        stateNow: setAddressCart,
                        stateNext: setPaymentCart
                      })
                    }
                  >
                    Continuar com o pagamento
                  </Button>
                  <Button
                    type="button"
                    onClick={() =>
                      skipCart({
                        stateNow: setAddressCart,
                        stateNext: setMenuCart
                      })
                    }
                  >
                    Voltar para o carrinho
                  </Button>
                </S.Content>
              </S.Display>
              <S.Display className={paymentCart ? 'show' : ''}>
                <S.Content>
                  <h2>
                    Pagamento - Total {formatPrices(getTotalPrice(items))}
                  </h2>
                  <S.InputGroup>
                    <label htmlFor="cardOwern">Nome no cartão</label>
                    <input name="cardOwern" />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input name="cardNumber" />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="houseNumber">CVV</label>
                      <input name="houseNumber" />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="experiesMonth">Mês de vencimento</label>
                      <input name="experiesMonth" />
                    </S.InputGroup>
                    <S.InputGroup className="margin-bottom" maxWidth="155px">
                      <label htmlFor="experiesYear">Ano de vencimento</label>
                      <input name="experiesYear" />
                    </S.InputGroup>
                  </S.Row>
                  <Button type="button">Finalizar Compra</Button>
                  <Button
                    type="button"
                    onClick={() =>
                      skipCart({
                        stateNow: setPaymentCart,
                        stateNext: setAddressCart
                      })
                    }
                  >
                    Voltar para a edição de endereço
                  </Button>
                </S.Content>
              </S.Display>
            </form>
          </>
        ) : (
          <div className="text-empty">
            <h4>
              Seu carrinho está vazio! <br />
              <br />
              Por favor, adicione um item para continuar..
            </h4>
            <Button type="button" onClick={closeCart}>
              Voltar para o cardápio
            </Button>
          </div>
        )}
      </S.SideBar>
    </S.CheckoutContainer>
  )
}
export default Checkout
