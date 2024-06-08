import * as S from './styles';

export function Partner({ title, discount, image }) {
  return (
    <S.Wrapper
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%), url(${image})`
      }}>
      <S.Title>{title}</S.Title>
      <S.Discount>{discount}</S.Discount>
    </S.Wrapper>
  );
}
