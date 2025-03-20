import { ButtonLink, ButtonStyle } from './styles'

type Props = {
  type: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, type, to, onClick }: Props) => {
  if (type === 'link') {
    return (
      <ButtonLink type="link" to={to as string}>
        {children}
      </ButtonLink>
    )
  }

  return (
    <ButtonStyle type="button" onClick={onClick}>
      {children}
    </ButtonStyle>
  )
}

export default Button
