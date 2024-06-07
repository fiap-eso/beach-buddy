import background from '../../assets/background_1.jpg';

import * as S from './styles';

export function AuthPageLayout({ children }) {
  return (
    <S.Wrapper>
      <S.Aside>{children}</S.Aside>
      <S.Image src={background} />
    </S.Wrapper>
  );
}
