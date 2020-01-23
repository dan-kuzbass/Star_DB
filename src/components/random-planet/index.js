import React, { useState, useEffect } from 'react';

import SwapiService from "../../services/swapi-service";

import './index.css';

const RandomPlanet = props => {
  const [planet, setPlanet] = useState({});
  useEffect(() => {
    updatePlanet();
  }, []);

  const onPlanetLoaded = planet => {
    setPlanet(planet);
  }

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    let swapiService = new SwapiService();
    swapiService
      .getPlanet(id)
      .then(onPlanetLoaded)
  }
  
  return (
    <div className="random-planet jumbotron rounded">
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${planet.id}.jpg`} />
      <div>
        <h4>{planet.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{planet.population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{planet.rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{planet.diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RandomPlanet;