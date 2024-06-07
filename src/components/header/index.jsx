import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_h_color.svg';

import * as S from './styles';
import { Profile } from '../profile';

export function Header({ active }) {
  const navigate = useNavigate();

  return (
    <S.Wrapper>
      <S.Logo src={logo} />

      <S.Nav>
        <S.Link onClick={() => navigate('/')} active={active === 0}>
          Praias
        </S.Link>
        <S.Link onClick={() => navigate('/experiences')} active={active === 1}>
          Experiências
        </S.Link>
      </S.Nav>

      <S.Side>
        <S.Text>Vire parceiro do Beach Buddy</S.Text>
        <Profile />
      </S.Side>
    </S.Wrapper>
  );
}
