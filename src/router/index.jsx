import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { SignupPage } from '../pages/signup';
import { FinishAccountPage } from '../pages/finishAccount';
import { ExperiencesPage } from '../pages/experiences';
import { ExperiencePage } from '../pages/experience';

export function AppRouter() {
  return (
    <BrowserRouter basename="/beach-buddy">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/signup-2" exact element={<FinishAccountPage />} />
        <Route path="/experiences" exact element={<ExperiencesPage />} />
        <Route path="/experiences/:id" exact element={<ExperiencePage />} />
        <Route path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
