import { AppRouter } from './router';
import { ResetCss } from './styles/reset';

export function App() {
  return (
    <>
      <ResetCss />
      <AppRouter />
    </>
  );
}
