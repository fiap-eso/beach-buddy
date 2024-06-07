import { Link } from 'react-router-dom';
import logo from '../../assets/logo_bb.svg';
import googleLogo from '../../assets/google.png';
import appleLogo from '../../assets/apple.png';

import * as S from './styles';
import { AuthPageLayout } from '../../components/authPageLayout';

export function LoginPage() {
  return (
    <AuthPageLayout>
      <S.Logo src={logo} />
      <S.Row>
        <S.Title>Seja bem-vindo de volta</S.Title>
        <S.Text>Entre com seu email e senha para acessar sua conta.</S.Text>
      </S.Row>

      <S.Form>
        <S.InputGroup>
          <S.Label>E-mail</S.Label>
          <S.Input placeholder="Digite seu e-mail..." />
        </S.InputGroup>

        <S.InputGroup>
          <S.Label>Senha</S.Label>
          <S.Input placeholder="Digite seu senha..." />
          <Link to="/">
            <S.Link>Esqueceu a senha?</S.Link>
          </Link>
        </S.InputGroup>

        <S.Button>Entrar</S.Button>
      </S.Form>

      <S.Divider>ou</S.Divider>

      <S.Row>
        <S.SocialButton>
          <S.SocialIcon src={googleLogo} />
          Entre com Google
        </S.SocialButton>
        <S.SocialButton>
          <S.SocialIcon src={appleLogo} />
          Entre com Apple
        </S.SocialButton>
      </S.Row>

      <S.BottomText>
        Ainda não tem uma conta? <S.Link>Faça seu cadastro</S.Link>
      </S.BottomText>
    </AuthPageLayout>
  );
}
