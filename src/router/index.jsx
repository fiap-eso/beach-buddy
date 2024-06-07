import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';
import { SignupPage } from '../pages/signup';
import { FinishAccountPage } from '../pages/finishAccount';

export function AppRouter() {
  return (
    <BrowserRouter basename="/beach-buddy">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/signup-2" exact element={<FinishAccountPage />} />
        <Route path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
