import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="list">Obras</Link>
      <br />
      <Link to="info">Información</Link>
      <br />
      <Link to="learn">Aprendizaje</Link>
    </div>
  );
};
