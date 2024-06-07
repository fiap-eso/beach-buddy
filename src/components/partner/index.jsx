import * as S from './styles';

export function Partner({ title, discount }) {
  return (
    <S.Wrapper
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/partner_1.jpg)`
      }}>
      <S.Title>{title}</S.Title>
      <S.Discount>{discount}</S.Discount>
    </S.Wrapper>
  );
}
