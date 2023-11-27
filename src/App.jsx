import { Flex, Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Home, List, Learn, Infobra, Course, NotFound, Login } from './routes';
import { NavBar, Footer } from './shared';

export const App = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      <NavBar />
      <Box flex="1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/hackaton-cgr2023/*"
            element={
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="inicio" element={<Home />} />
                <Route path="lista" element={<List />} />
                <Route
                  path="lista/infobra/:codINFOBRAS"
                  element={<Infobra />}
                />
                <Route path="aprendizaje" element={<Learn />} />
                <Route
                  path="aprendizaje/curso/:codCourse"
                  element={<Course />}
                />
              </Routes>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </Flex>
  );
};
