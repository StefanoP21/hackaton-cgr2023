import { Route, Routes } from 'react-router-dom';
import { Home, List, Learn, Infobras } from './routes';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista" element={<List />} />
        <Route path="/infobras" element={<Infobras />} />
        <Route path="/aprendizaje" element={<Learn />} />
      </Routes>
    </div>
  );
};
