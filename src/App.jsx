import { Route, Routes } from 'react-router-dom';
import { Home, List, Learn, Infobra } from './routes';
import { NavBar, Footer } from './shared';

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<List />} />
        <Route path="/lista/infobra/:codINFOBRAS" element={<Infobra />} />
        <Route path="/aprendizaje" element={<Learn />} />
      </Routes>

      <Footer />
    </>
  );
};
