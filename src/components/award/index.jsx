import * as S from './styles';

export function Award({ text, imageUrl }) {
  return (
    <S.Wrapper>
      <S.Image src={imageUrl} />
      <S.Text>{text}</S.Text>
    </S.Wrapper>
  );
}
