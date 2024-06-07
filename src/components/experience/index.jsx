import { useNavigate } from 'react-router-dom';
import * as S from './styles';

export function Experience({ id, title, local, date, participants, imageUrl }) {
  const navigate = useNavigate();

  return (
    <S.Wrapper
      onClick={() => navigate(`/experiences/${id}`)}
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
