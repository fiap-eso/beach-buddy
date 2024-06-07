import * as S from './styles';

export function Rating({ title, rate, image }) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Rate>{rate}</S.Rate>
      <S.Image src={image} />
    </S.Wrapper>
  );
}
