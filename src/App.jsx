import { Route, Routes } from 'react-router-dom';
import { Home, List, Learn, Infobra, Course, NotFound } from './routes';
import { NavBar, Footer } from './shared';

export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackaton-cgr2023/" element={<Home />} />
        <Route path="/hackaton-cgr2023/inicio" element={<Home />} />
        <Route path="/hackaton-cgr2023/lista" element={<List />} />
        <Route
          path="/hackaton-cgr2023/lista/infobra/:codINFOBRAS"
          element={<Infobra />}
        />
        <Route path="/hackaton-cgr2023/aprendizaje" element={<Learn />} />
        <Route
          path="/hackaton-cgr2023/aprendizaje/curso/:codCourse"
          element={<Course />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
