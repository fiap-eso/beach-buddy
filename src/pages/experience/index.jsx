import share from '../../assets/share.svg';
import heart from '../../assets/heart.svg';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import * as S from './styles';
import { Award } from '../../components/award';

export function ExperiencePage() {
  return (
    <>
      <Header active={1} />
      <S.Wrapper>
        <S.Row>
          <S.Title>Limpeza comunitaria - Praia Grande - SP</S.Title>

          <S.Column>
            <S.HeadLink>
              <S.HeadLinkIcon src={share} />
              Compartilhar
            </S.HeadLink>

            <S.HeadLink>
              <S.HeadLinkIcon src={heart} />
              Salvar
            </S.HeadLink>
          </S.Column>
        </S.Row>

        <S.Date>08 de junho</S.Date>

        <S.Title style={{ textAlign: 'center' }}>Participe para ganhar</S.Title>

        <S.AwardsList>
          <Award
            imageUrl="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/1/award_1.png"
            text="Squeeze do Evento"
          />
          <Award
            imageUrl="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/1/award_2.jpg"
            text="Camiseta do Evento"
          />
          <Award
            imageUrl="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/1/award_3.jpg"
            text="R$50,00 no Ifood"
          />
          <Award
            imageUrl="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/1/award_4.jpg"
            text="25% de desconto na pousada das flores"
          />
        </S.AwardsList>

        <S.ImageList>
          <S.Image src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/1/details_1.jpg" />
          <S.Image src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/1/details_2.jpg" />
        </S.ImageList>

        <S.DescriptionGroup>
          <S.DescriptionTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </S.DescriptionTitle>
          <S.Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor ultricies
            convallis. Praesent feugiat fermentum augue, ac congue orci mattis et. Ut metus ligula,
            finibus sed erat eu, tincidunt tristique enim. Nulla quis feugiat sem, eget egestas
            nulla. Suspendisse viverra neque vel volutpat tempus. In justo dolor, elementum eget sem
            at, pretium ornare mauris. <br />
            Morbi elementum lectus et metus pretium suscipit.Donec dignissim viverra ipsum, vitae
            vestibulum ante hendrerit nec. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Duis sed fringilla nibh. Etiam consectetur malesuada
            auctor. Nullam feugiat ligula mi. Integer suscipit aliquet mauris et consectetur. Sed
            urna quam, vehicula eleifend egestas vitae, porttitor egestas est. Duis eleifend
            scelerisque sapien. <br />
            Pellentesque non sagittis lorem. Nunc at semper nulla. Curabitur nec quam orci.
            Suspendisse potenti. Vestibulum bibendum neque rutrum libero tristique, quis imperdiet
            odio dapibus. Donec finibus, purus vel lobortis venenatis, ex mi malesuada risus, sed
            faucibus mauris nulla ac tellus. Cras sollicitudin bibendum hendrerit. Nulla facilisi.
          </S.Description>
          <S.Link>Mostrar mais</S.Link>
        </S.DescriptionGroup>
      </S.Wrapper>
      <Footer />
    </>
  );
}
