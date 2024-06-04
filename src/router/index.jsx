import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home';

export function AppRouter() {
  return (
    <BrowserRouter basename="/beach-buddy">
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="*" element={<h1>Erro</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
