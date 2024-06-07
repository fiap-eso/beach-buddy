import share from '../../assets/share.svg';
import heart from '../../assets/heart.svg';
import star1 from '../../assets/star_1.svg';
import star2 from '../../assets/star_2.svg';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import * as S from './styles';
import { Rating } from '../../components/rating';
import { Comment } from '../../components/comment';
import { Partner } from '../../components/partner';

export function BeachPage() {
  return (
    <>
      <Header active={0} />
      <S.Wrapper>
        <S.Row>
          <S.Title>Praia do Tigre - Ubatuba - SP</S.Title>

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

        <S.ImagesWrapper>
          <S.BigImage src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/big.jpg" />
          <S.SmallImage
            src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/small_1.jpg"
            style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }}
          />
          <S.SmallImage
            src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/small_2.jpg"
            style={{ gridColumn: '4 / 5', gridRow: '1 / 2' }}
          />
          <S.SmallImage
            src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/small_3.jpg"
            style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}
          />
          <S.SmallImage
            src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/small_4.jpg"
            style={{ gridColumn: '4 / 5', gridRow: '2 / 3' }}
          />
          <S.MediumImage src="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/medium.jpg" />

          <S.DescriptionWrapper>
            <S.DescriptionTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </S.DescriptionTitle>

            <S.Description>
              <S.Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor ultricies
                convallis. Praesent feugiat fermentum augue, ac congue orci mattis et. Ut metus
                ligula, finibus sed erat eu, tincidunt tristique enim. Nulla quis feugiat sem, eget
                egestas nulla. Suspendisse viverra neque vel volutpat tempus. In justo dolor,
                elementum eget sem at, pretium ornare mauris. <br /> <br />
                Morbi elementum lectus et metus pretium suscipit.Donec dignissim viverra ipsum,
                vitae vestibulum ante hendrerit nec. Vestibulum ante ipsum primis in faucibus orci
                luctus et ultrices posuere cubilia curae; Duis sed fringilla nibh. Etiam consectetur
                malesuada auctor. Nullam feugiat ligula mi. Integer suscipit aliquet mauris et
                consectetur. Sed urna quam, vehicula eleifend egestas vitae, porttitor egestas est.
                Duis eleifend scelerisque sapien. <br /> <br />
                Pellentesque non sagittis lorem. Nunc at semper nulla. Curabitur nec quam orci.
                Suspendisse potenti. Vestibulum bibendum neque rutrum libero tristique, quis
                imperdiet odio dapibus. Donec finibus, purus vel lobortis venenatis, ex mi malesuada
                risus, sed faucibus mauris nulla ac tellus. Cras sollicitudin bibendum hendrerit.
                Nulla facilisi.
              </S.Description>
            </S.Description>
          </S.DescriptionWrapper>
        </S.ImagesWrapper>
        <S.ContentWrapper>
          <S.LeftLine />
          <S.RightLine />
          <S.BottomLine />
          <S.Content>
            <S.ContentHeader>
              <S.RatingWrapper>
                <S.Star1 src={star1} />
                <S.Rating>4,96</S.Rating>
                <S.Star2 src={star2} />
              </S.RatingWrapper>
              <S.RatingDescriptionWrapper>
                <S.RatingTitle>Preferido dos viajantes</S.RatingTitle>
                <S.RatingDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor ultricies
                  convallis.
                </S.RatingDescription>
              </S.RatingDescriptionWrapper>
            </S.ContentHeader>
            <S.RatingList>
              <Rating />
              <Rating />
              <Rating />
              <Rating />
              <Rating />
            </S.RatingList>
            <S.CommentList>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </S.CommentList>
            <S.PartnersWrapper>
              <S.PartnersTitle>Conheca nossos parceiros</S.PartnersTitle>
              <S.PartnersList>
                <Partner />
                <Partner />
                <Partner />
              </S.PartnersList>
            </S.PartnersWrapper>
          </S.Content>
        </S.ContentWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
}
