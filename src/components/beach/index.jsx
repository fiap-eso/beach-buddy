/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heart from '../../assets/heart.svg';
import star from '../../assets/star.svg';

import * as S from './styles';

export function Beach({ id, name, location, subtitle, rating, images, isFavorite }) {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <S.Wrapper onClick={() => navigate(`/beaches/${id}`)}>
      <S.Image
        style={{
          backgroundImage: `url(${images[active]})`
        }}>
        <S.Header>
          {isFavorite ? <S.Headline>Preferido dos viajantes</S.Headline> : <div></div>}
          <S.FavIcon src={heart} />
        </S.Header>

        <S.CircleList>
          {images.map((_, index) => (
            <S.Circle
              key={`circle-${index}`}
              active={index === active}
              onClick={(e) => {
                e.stopPropagation();
                setActive(index);
              }}
            />
          ))}
        </S.CircleList>
      </S.Image>
      <S.Description>
        <S.Column>
          <S.Title>{name}</S.Title>
          <S.Location>{location}</S.Location>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Column>
        <S.Rating>
          <S.Star src={star} />
          {rating}
        </S.Rating>
      </S.Description>
    </S.Wrapper>
  );
}
