import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Beach } from '../../components/beach';

import * as S from './styles';

import beaches from '../../constants/beaches.json';

export function HomePage() {
  return (
    <>
      <Header active={0} />
      <S.Wrapper>
        <S.BeachList>
          {beaches.map((b, index) => (
            <Beach
              key={b.id}
              id={index}
              isFavorite={b.isFavorite}
              name={b.name}
              location={`${b.city}, ${b.state} - ${b.country}`}
              subtitle={b.subtitle}
              rating={b.rating}
              images={b.images}
            />
          ))}
        </S.BeachList>
      </S.Wrapper>
      <Footer />
    </>
  );
}
