import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_bb.svg';

import * as S from './styles';
import { AuthPageLayout } from '../../components/authPageLayout';

export function SignupPage() {
  const navigate = useNavigate();

  return (
    <AuthPageLayout>
      <S.Logo src={logo} />
      <S.Row>
        <S.Title>Seja bem-vindo</S.Title>
        <S.Text>Preencha os seus dados para criarmos a sua conta.</S.Text>
      </S.Row>

      <S.Form>
        <S.InputGroup>
          <S.Label>Nome completo</S.Label>
          <S.Input placeholder="Digite seu nome completo..." />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Documento (CPF ou RG)</S.Label>
          <S.Input placeholder="Digite seu documento..." />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Celular</S.Label>
          <S.Input placeholder="Digite seu celular..." />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>E-mail</S.Label>
          <S.Input placeholder="Digite seu e-mail..." />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Senha</S.Label>
          <S.Input placeholder="Digite seu senha..." />
        </S.InputGroup>

        <S.Button onClick={() => navigate('/signup-2')}>Entrar</S.Button>
      </S.Form>

      <S.BottomText>
        Já tem uma conta? <S.Link onClick={() => navigate('/login')}>Acesse ela agora</S.Link>
      </S.BottomText>

      <S.Stepper>
        <S.Step active />
        <S.Step />
      </S.Stepper>
    </AuthPageLayout>
  );
}
