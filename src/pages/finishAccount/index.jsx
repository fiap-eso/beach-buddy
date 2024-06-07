import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_bb.svg';

import * as S from './styles';
import { AuthPageLayout } from '../../components/authPageLayout';

export function FinishAccountPage() {
  const navigate = useNavigate();

  return (
    <AuthPageLayout>
      <S.Logo src={logo} />
      <S.Row>
        <S.Title>Obrigado por criar sua conta conosco!</S.Title>
        <S.Text>
          Parabéns. Agora você tem uma conta no BeachBuddy, inicie agora a procura por praias e por
          experiências que irão transformar os oceanos.
        </S.Text>
      </S.Row>

      <S.Row
        style={{
          alignItems: 'stretch'
        }}>
        <S.Button onClick={() => navigate('/')}>Procurar praias</S.Button>

        <S.Link onClick={() => navigate('/')}>Deixar para mais tarde</S.Link>
      </S.Row>

      <S.Stepper>
        <S.Step />
        <S.Step active />
      </S.Stepper>
    </AuthPageLayout>
  );
}
