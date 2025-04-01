import { ClipLoader } from 'react-spinners'
import { Container } from './styles'
import { color } from '../../styles'

const Loader = () => (
  <Container>
    <ClipLoader color={color.pink} />
  </Container>
)

export default Loader
