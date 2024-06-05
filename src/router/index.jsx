import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';
import { LoginPage } from '../pages/login';

export function AppRouter() {
  return (
    <BrowserRouter basename="/beach-buddy">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
