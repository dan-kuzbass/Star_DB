import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './index.css';
import PeoplePage from '../people-page';

const App = props => {

  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  const toggleRandomPlanet = () => {
    setShowRandomPlanet(!showRandomPlanet);
  };

  const planet = showRandomPlanet ?
    <RandomPlanet /> :
    null;

  return (
    <div className="stardb-app">
      <Header />
      {planet}
      <button
        className="toggle-planet btn btn-warning btn-lg"
        onClick={toggleRandomPlanet}>
        Toggle Random Planet
      </button>
      <PeoplePage />
    </div>
  );
}

export default App;