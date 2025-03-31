import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from './components/Header'

import Rotas from './routes'
import Footer from './components/Footer'

import store from './store'
import Checkout from './components/Checkout'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
        <Checkout />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
