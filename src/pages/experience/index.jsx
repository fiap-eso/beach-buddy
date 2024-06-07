import { useParams } from 'react-router-dom';
import share from '../../assets/share.svg';
import heart from '../../assets/heart.svg';

import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import * as S from './styles';
import { Award } from '../../components/award';
import experiences from '../../constants/experiences.json';

export function ExperiencePage() {
  const { id } = useParams();

  const data = experiences[id];

  return (
    <>
      <Header active={1} />
      <S.Wrapper>
        <S.Row>
          <S.Title>
            {data.name} - {data.location}
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

        <S.Date>{data.date}</S.Date>

        <S.Title style={{ textAlign: 'center' }}>Participe para ganhar</S.Title>

        <S.AwardsList>
          {data.awards.map((a) => (
            <Award imageUrl={a.imageUrl} text={a.name} />
          ))}
        </S.AwardsList>

        <S.ImageList>
          {data.details.map((d) => (
            <S.Image src={d} />
          ))}
        </S.ImageList>

        <S.DescriptionGroup>
          <S.DescriptionTitle>{data.title}</S.DescriptionTitle>
          <S.Description>
            {data.description.split('//').map((d) => (
              <>
                {d}
                <br />
                <br />
              </>
            ))}
          </S.Description>
          <S.Link>Mostrar mais</S.Link>
        </S.DescriptionGroup>
      </S.Wrapper>
      <Footer />
    </>
  );
}
