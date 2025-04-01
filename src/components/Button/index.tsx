import * as S from './styles'

type Props = {
  type: 'button' | 'link' | 'submit'
  to?: string
  onClick?: () => void
  children: string | JSX.Element
  disabled?: boolean
}

const Button = ({ children, type, to, onClick, disabled }: Props) => {
  if (type === 'link') {
    return (
      <S.ButtonLink type="link" to={to as string}>
        {children}
      </S.ButtonLink>
    )
  }

  return (
    <S.ButtonStyle type={type} onClick={onClick} disabled={disabled}>
      {children}
    </S.ButtonStyle>
  )
}

export default Button
