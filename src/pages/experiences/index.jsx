import { Experience } from '../../components/experience';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import * as S from './styles';

export function ExperiencesPage() {
  return (
    <>
      <Header active={1} />
      <S.List>
        <Experience
          title="Limpeza comunitaria"
          local="Praia Grande - SP"
          date="08 de Julho"
          participants={362}
          imageUrl="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/background.jpg"
        />
        <Experience
          title="Limpeza comunitaria"
          local="Praia Grande - SP"
          date="08 de Julho"
          participants={362}
          imageUrl="https://sonalmat.sirv.com/FIAP/Beach%20Buddy/Experiences/background.jpg"
        />
      </S.List>
      <Footer />
    </>
  );
}
