import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="lista">Obras</Link>
      <br />
      <Link to="infobras">Información</Link>
      <br />
      <Link to="aprendizaje">Aprendizaje</Link>
    </div>
  );
};
