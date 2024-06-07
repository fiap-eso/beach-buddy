import * as S from './styles';

export function Comment({ name, city, days, daysSpent, comment }) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Image
          src={`https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`}
        />
        <S.Column>
          <S.Name>{name}</S.Name>
          <S.City>{city}</S.City>
        </S.Column>
      </S.Header>
      <S.Text>
        {days} dias atras - Ficou em torno de {daysSpent} dias
      </S.Text>
      <S.Text>{comment}</S.Text>
    </S.Wrapper>
  );
}
