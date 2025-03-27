import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from './components/Header'

import Rotas from './routes'
import Footer from './components/Footer'
import Cart from './components/Cart'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Rotas />
        <Cart />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
