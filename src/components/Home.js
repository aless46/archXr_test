import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur notre site !</h1>
      <Link to="/StaticCube">
        <button>Cube</button>
      </Link>
      <Link to="/House">
            <button>House</button>
        </Link>
    </div>
  );
}

export default HomePage;
