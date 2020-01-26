import React, { useState } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';

import './index.css';
import ItemDetails, { Record } from '../item-details';
import Row from "../row";
import SwapiService from "../../services/swapi-service";

const App = props => {

  const [showRandomPlanet, setShowRandomPlanet] = useState(true);

  const toggleRandomPlanet = () => {
    setShowRandomPlanet(!showRandomPlanet);
  };

  const planet = showRandomPlanet ?
    <RandomPlanet /> :
    null;

  const { getPerson, getStarship, getPersonImage, getStarshipImage } = new SwapiService();

  const personDetails = (
    <ItemDetails
      itemId={11}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
    </ItemDetails>
  );

  const starshipDetails = (
    <ItemDetails
      itemId={5}
      getData={getStarship}
      getImageUrl={getStarshipImage}
    >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );

  return (
    <div className="stardb-app">
      <Header />
      {/* {planet}
      <button
        className="toggle-planet btn btn-warning btn-lg"
        onClick={toggleRandomPlanet}>
        Toggle Random Planet
      </button>
      <PeoplePage /> */}
      <Row left={personDetails} right={starshipDetails}></Row>
    </div>
  );
}

export default App;