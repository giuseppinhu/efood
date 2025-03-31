import brand from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Brand } from '../../styles'
import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <Brand src={brand} />
      <S.ListSocial>
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
      </S.ListSocial>
      <S.CopyRight>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.CopyRight>
    </div>
  </S.FooterContainer>
)

export default Footer
