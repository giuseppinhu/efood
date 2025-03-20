import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles'
import Header from './components/Header'
import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
