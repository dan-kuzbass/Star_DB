import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './index.css';
import { Record } from '../item-details';
import Row from "../row";
import SwapiService from "../../services/swapi-service";
import PeoplePage from "../people-page";
import ErrorBoundry from '../error-boundry';
import { PersonList, PlanetList, StarshipList } from "../sw-components/item-lists";
import { PersonDetails, PlanetDetails, StarshipDetails } from "../sw-components/details";

const App = props => {

  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  const toggleRandomPlanet = () => {
    setShowRandomPlanet(!showRandomPlanet);
  };

  const planet = showRandomPlanet ?
    <RandomPlanet /> :
    null;

  return (
    <ErrorBoundry>
      <div className="stardb-app">
        <Header />
        {planet}
        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={toggleRandomPlanet}>
          Toggle Random Planet
        </button>
        <Row left={<PersonList />} right={<PersonDetails itemId={5} />}></Row>
      </div>
    </ErrorBoundry>
  );
}

export default App;