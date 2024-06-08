import { useParams } from 'react-router-dom';
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
import beaches from '../../constants/beaches.json';

export function BeachPage() {
  const { id } = useParams();

  const data = beaches[id];

  return (
    <>
      <Header active={0} />
      <S.Wrapper>
        <S.Row>
          <S.Title>
            {data.name} - {data.city} - {data.state}
          </S.Title>

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
          <S.BigImage src={data.images[0]} />
          <S.SmallImage src={data.images[1]} style={{ gridColumn: '3 / 4', gridRow: '1 / 2' }} />
          <S.SmallImage src={data.images[2]} style={{ gridColumn: '4 / 5', gridRow: '1 / 2' }} />
          <S.SmallImage src={data.images[3]} style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }} />
          <S.SmallImage src={data.images[4]} style={{ gridColumn: '4 / 5', gridRow: '2 / 3' }} />
          <S.MediumImage src={data.images[5]} />

          <S.DescriptionWrapper>
            <S.DescriptionTitle>{data.descriptionTitle}</S.DescriptionTitle>

            <S.Description>
              <S.Description>{data.description}</S.Description>
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
                <S.Rating>{data.rating}</S.Rating>
                <S.Star2 src={star2} />
              </S.RatingWrapper>
              {data.isFavorite && (
                <S.RatingDescriptionWrapper>
                  <S.RatingTitle>Preferido dos viajantes</S.RatingTitle>
                  <S.RatingDescription>{data.ratingSubtitle}</S.RatingDescription>
                </S.RatingDescriptionWrapper>
              )}
            </S.ContentHeader>
            <S.RatingList>
              <Rating
                title="Alimentação"
                rate={data.ratings.food}
                image="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Icons/alimentacao.svg"
              />
              <Rating
                title="Limpeza"
                rate={data.ratings.cleanning}
                image="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Icons/cleanning.svg"
              />
              <Rating
                title="Localização"
                rate={data.ratings.location}
                image="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Icons/localizacao.svg"
              />
              <Rating
                title="Preço"
                rate={data.ratings.price}
                image="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Icons/preco.svg"
              />
              <Rating
                title="Serviços"
                rate={data.ratings.services}
                image="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Icons/servicos.svg"
              />
            </S.RatingList>
            <S.CommentList>
              {data.comments.map((c) => (
                <Comment
                  name={c.name}
                  city={c.location}
                  days={c.days}
                  daysSpent={c.daysSpent}
                  comment={c.comment}
                />
              ))}
            </S.CommentList>
            <S.PartnersWrapper>
              <S.PartnersTitle>Conheça nossos parceiros</S.PartnersTitle>
              <S.PartnersList>
                {data.partners.map((p) => (
                  <Partner title={p.name} discount={p.discount} image={p.image} />
                ))}
              </S.PartnersList>
            </S.PartnersWrapper>
          </S.Content>
        </S.ContentWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
}
