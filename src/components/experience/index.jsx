import * as S from './styles';

export function Experience({ title, local, date, participants, imageUrl }) {
  return (
    <S.Wrapper
      style={{
        backgroundImage: `url(${imageUrl})`
      }}>
      <S.Column>
        <S.Title>{title}</S.Title>
        <S.Text>{local}</S.Text>
        <S.Date>{date}</S.Date>
      </S.Column>
      <S.Column>
        <S.Text>{participants} participantes</S.Text>
      </S.Column>
    </S.Wrapper>
  );
}
