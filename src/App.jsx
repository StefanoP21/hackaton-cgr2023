import { Route, Routes } from 'react-router-dom';
import { Home, List, Info, Learn } from './routes';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/info" element={<Info />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
};
