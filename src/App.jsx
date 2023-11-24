import { Route, Routes } from 'react-router-dom';
import { Home, List, Learn, Infobra } from './routes';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<List />} />
        <Route path="/lista/infobra/:codINFOBRAS" element={<Infobra />} />
        <Route path="/aprendizaje" element={<Learn />} />
      </Routes>
    </div>
  );
};
