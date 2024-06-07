import * as S from './styles';

export function Partner() {
  return (
    <S.Wrapper
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.40) 100%), url(https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Beaches/1/partner_1.jpg)`
      }}>
      <S.Title>Bar do Chico</S.Title>
      <S.Discount>Ganhe 10% de desconto ao trazer as latas e garrafas apos o consumo.</S.Discount>
    </S.Wrapper>
  );
}
