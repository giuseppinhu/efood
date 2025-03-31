import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'
import Cart from '../Cart'

import { RootReducer } from '../../store'
import { close } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'
import { formatPrices, getTotalPrice } from '../../utils'

type skipCartProp = {
  stateNow: React.Dispatch<React.SetStateAction<boolean>>
  stateNext: React.Dispatch<React.SetStateAction<boolean>>
}

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, {}] = usePurchaseMutation()
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

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      houseNumber: '',
      complement: '',
      cardOwner: '',
      cardNumber: '',
      cardCode: '',
      experiesMonth: '',
      experiesYear: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O campo precisar ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(2, 'O campo precisa ser maior')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(3, 'Insira um cidade válida')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O campo precisar ser maior')
        .max(9, 'O campo precisar ser menor')
        .required('O campo é obrigatório'),
      houseNumber: Yup.string()
        .min(2, 'O campo precisar ser maior')
        .required('O campo é obrigatório'),
      complement: Yup.string(),

      cardOwner: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      experiesMonth: Yup.string().required('O campo é obrigatório'),
      experiesYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {}
  })

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

            <form onSubmit={form.handleSubmit}>
              <S.Display className={addressCart ? 'show' : ''}>
                <S.Content>
                  <h2>Entrega</h2>
                  <S.InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      onChange={form.handleChange}
                      value={form.values.fullName}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      onChange={form.handleChange}
                      value={form.values.address}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      onChange={form.handleChange}
                      value={form.values.city}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        name="cep"
                        type="text"
                        onChange={form.handleChange}
                        value={form.values.cep}
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="houseNumber">Número</label>
                      <input
                        id="houseNumber"
                        name="houseNumber"
                        type="text"
                        onChange={form.handleChange}
                        value={form.values.houseNumber}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup className="margin-bottom">
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      name="complement"
                      type="text"
                      onChange={form.handleChange}
                      value={form.values.complement}
                    />
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
                    <label htmlFor="cardOwner">Nome no cartão</label>
                    <input
                      id="cardOwner"
                      name="cardOwner"
                      type="text"
                      onChange={form.handleChange}
                      value={form.values.cardOwner}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup maxWidth="228px">
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        name="cardNumber"
                        type="text"
                        onChange={form.handleChange}
                        value={form.values.cardNumber}
                      />
                    </S.InputGroup>
                    <S.InputGroup maxWidth="87px">
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        name="cardCode"
                        type="text"
                        onChange={form.handleChange}
                        value={form.values.cardCode}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup maxWidth="155px">
                      <label htmlFor="experiesMonth">Mês de vencimento</label>
                      <input
                        id="experiesMoth"
                        name="experiesMonth"
                        type="text"
                        onChange={form.handleChange}
                        value={form.values.experiesMonth}
                      />
                    </S.InputGroup>
                    <S.InputGroup className="margin-bottom" maxWidth="155px">
                      <label htmlFor="experiesYear">Ano de vencimento</label>
                      <input
                        id="experiesYear"
                        name="experiesYear"
                        type="text"
                        onChange={form.handleChange}
                        value={form.values.experiesYear}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <Button type="button" onClick={form.handleSubmit}>
                    Finalizar Compra
                  </Button>
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
