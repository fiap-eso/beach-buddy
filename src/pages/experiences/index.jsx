import { Experience } from '../../components/experience';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

import experiences from '../../constants/experiences.json';

import * as S from './styles';

export function ExperiencesPage() {
  return (
    <>
      <Header active={1} />
      <S.List>
        {experiences.map((ex, index) => (
          <Experience
            id={index}
            title={ex.name}
            local={ex.location}
            date={ex.date}
            participants={ex.people}
            imageUrl={ex.imageUrl}
          />
        ))}
      </S.List>
      <Footer />
    </>
  );
}
