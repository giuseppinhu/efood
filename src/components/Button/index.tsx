import * as S from './styles'

type Props = {
  type: 'button' | 'link'
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ children, type, to, onClick }: Props) => {
  if (type === 'link') {
    return (
      <S.ButtonLink type="link" to={to as string}>
        {children}
      </S.ButtonLink>
    )
  }

  return (
    <S.ButtonStyle type="button" onClick={onClick}>
      {children}
    </S.ButtonStyle>
  )
}

export default Button
