import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../../assets/profile.svg';
import hamburguer from '../../assets/hamburguer.svg';

import * as S from './styles';

export function Profile() {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => setActive(!active)}>
      <S.MenuIcon src={profile} />
      <S.ProfileIcon src={hamburguer} />

      {active && (
        <S.ActiveMenu>
          <S.ActiveMenuItem
            onClick={() => {
              navigate('/login');
            }}>
            Acessar
          </S.ActiveMenuItem>
          <S.ActiveMenuItem
            onClick={() => {
              navigate('/signup');
            }}>
            Cadastrar
          </S.ActiveMenuItem>
        </S.ActiveMenu>
      )}
    </S.Wrapper>
  );
}
