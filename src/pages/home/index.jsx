import { useRef, useState } from 'react';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Beach } from '../../components/beach';

import play from '../../assets/play.svg';
import search from '../../assets/search.svg';

import * as S from './styles';

import beaches from '../../constants/beaches.json';

export function HomePage() {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const filteredData = beaches.filter((b) => {
    return b.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <Header active={0} />
      <S.Wrapper>
        <S.SearchWrapper onClick={() => inputRef.current.focus()}>
          <S.SearchInputWrapper>
            <S.Label>Onde</S.Label>
            <S.Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              ref={inputRef}
              placeholder="Buscar destinos"
            />
            <S.Button onClick={() => setSearchValue(value)}>
              <S.Icon src={search} />
            </S.Button>
          </S.SearchInputWrapper>
        </S.SearchWrapper>
        <S.BeachList>
          {filteredData.map((b, index) => (
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
        <S.PitchWrapper>
          <S.PitchText>Assista nosso pitch e entenda mais sobre o projeto!</S.PitchText>
          <S.PitchIcon src={play} onClick={() => window.open('https://youtube.com', '_blank')} />
        </S.PitchWrapper>
      </S.Wrapper>
      <Footer />
    </>
  );
}
