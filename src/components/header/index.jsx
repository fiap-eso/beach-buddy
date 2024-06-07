import logo from '../../assets/logo_h_color.svg';

import * as S from './styles';

export function Header({ active }) {
  return (
    <S.Wrapper>
      <S.Logo src={logo} />

      <S.Nav>
        <S.Link active={active === 0}>Praias</S.Link>
        <S.Link active={active === 1}>Experiências</S.Link>
      </S.Nav>

      <S.Side>
        <S.Text>Vire parceiro do Beach Buddy</S.Text>
      </S.Side>
    </S.Wrapper>
  );
}
