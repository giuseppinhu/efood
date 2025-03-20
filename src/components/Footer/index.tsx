import brand from '../../assets/images/logo.png'
import { Brand } from '../../styles'
import { FooterContainer, ListSocial, CopyRight } from './styles'

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Brand src={brand} />
      <ListSocial>
        <li>
          <a>
            <img src={instagram} />
          </a>
        </li>
        <li>
          <a>
            <img src={facebook} />
          </a>
        </li>
        <li>
          <a>
            <img src={twitter} />
          </a>
        </li>
      </ListSocial>
      <CopyRight>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </CopyRight>
    </div>
  </FooterContainer>
)

export default Footer
