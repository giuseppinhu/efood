import * as Yup from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import InputMask from 'react-input-mask'

import Button from '../Button'
import Cart from '../Cart'

import { RootReducer } from '../../store'
import { close, clear } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import { formatPrices, getTotalPrice } from '../../utils'
import * as S from './styles'
import { color } from '../../styles'

type skipCartProp = {
  stateNow: React.Dispatch<React.SetStateAction<boolean>>
  stateNext: React.Dispatch<React.SetStateAction<boolean>>
}

const Checkout = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const [menuCart, setMenuCart] = useState(true)
  const [addressCart, setAddressCart] = useState(false)
  const [paymentCart, setPaymentCart] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      cep: Yup.string().required('O campo é obrigatório'),
      houseNumber: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),

      cardOwner: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      experiesMonth: Yup.string().required('O campo é obrigatório'),
      experiesYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [
          {
            id: 1,
            price: 12
          }
        ],
        delivery: {
          receiver: values.fullName,
          address: {
            city: values.city,
            description: values.complement,
            zipCode: values.cep,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardOwner,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.experiesMonth),
              year: Number(values.experiesYear)
            }
          }
        }
      })
    }
  })

  const getErrorForm = (fildname: string) => {
    const IsTouched = fildname in form.touched
    const IsValid = fildname in form.errors
    const hasError = IsTouched && IsValid

    return hasError
  }

  const refreshPage = () => {
    navigate(0)
  }

  const finishCart = (item: any) => {
    dispatch(clear(item))
    closeCart()
    navigate('/')
    refreshPage()
  }

  return (
    <S.CheckoutContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        {items.length == 0 ? (
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
        ) : (
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

            {isSuccess && data ? (
              <>
                <h2>Pedido Realizado - {data.orderId}</h2>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <br />
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <br />
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <br />
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <br />
                <Button type="button" onClick={() => finishCart(items)}>
                  Concluir
                </Button>
              </>
            ) : (
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
                        onBlur={form.handleBlur}
                        value={form.values.fullName}
                        className={getErrorForm('fullName') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="address">Endereço</label>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.address}
                        className={getErrorForm('address') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="city">Cidade</label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.city}
                        className={getErrorForm('city') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup maxWidth="155px">
                        <label htmlFor="cep">CEP</label>
                        <InputMask
                          id="cep"
                          name="cep"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cep}
                          className={getErrorForm('cep') ? 'error' : ''}
                          mask="99999-999"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="155px">
                        <label htmlFor="houseNumber">Número</label>
                        <input
                          id="houseNumber"
                          name="houseNumber"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.houseNumber}
                          className={getErrorForm('houseNumber') ? 'error' : ''}
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
                        onBlur={form.handleBlur}
                        value={form.values.complement}
                        className={getErrorForm('complement') ? 'error' : ''}
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
                        onBlur={form.handleBlur}
                        value={form.values.cardOwner}
                        className={getErrorForm('cardOwner') ? 'error' : ''}
                      />
                    </S.InputGroup>
                    <S.Row>
                      <S.InputGroup maxWidth="228px">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <InputMask
                          id="cardNumber"
                          name="cardNumber"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardNumber}
                          className={getErrorForm('cardNumber') ? 'error' : ''}
                          mask="9999 9999 9999 9999"
                        />
                      </S.InputGroup>
                      <S.InputGroup maxWidth="87px">
                        <label htmlFor="cardCode">CVV</label>
                        <InputMask
                          id="cardCode"
                          name="cardCode"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.cardCode}
                          className={getErrorForm('cardCode') ? 'error' : ''}
                          mask="999"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <S.Row>
                      <S.InputGroup maxWidth="155px">
                        <label htmlFor="experiesMonth">Mês de vencimento</label>
                        <InputMask
                          id="experiesMoth"
                          name="experiesMonth"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.experiesMonth}
                          className={
                            getErrorForm('experiesMonth') ? 'error' : ''
                          }
                          mask="99"
                        />
                      </S.InputGroup>
                      <S.InputGroup className="margin-bottom" maxWidth="155px">
                        <label htmlFor="experiesYear">Ano de vencimento</label>
                        <InputMask
                          id="experiesYear"
                          name="experiesYear"
                          type="text"
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          value={form.values.experiesYear}
                          className={
                            getErrorForm('experiesYear') ? 'error' : ''
                          }
                          mask="9999"
                        />
                      </S.InputGroup>
                    </S.Row>
                    <Button
                      type="submit"
                      onClick={form.handleSubmit}
                      disabled={isLoading}
                    >
                      <>
                        {isLoading ? (
                          <ClipLoader color={color.pink} size={16} />
                        ) : (
                          <span>Finalizar Compra</span>
                        )}
                      </>
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
            )}
          </>
        )}
      </S.SideBar>
    </S.CheckoutContainer>
  )
}
export default Checkout
