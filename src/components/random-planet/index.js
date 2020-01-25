import React, { useState, useEffect } from 'react';

import SwapiService from "../../services/swapi-service";

import './index.css';

import Spinner from "../spinner/index";
import ErrorIndicator from '../error-indicator';

const RandomPlanet = props => {
  const [planet, setPlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    updatePlanet();
    const intervalID = setInterval(updatePlanet, 5000);
    return () => {
      clearInterval(intervalID);
    }
  }, []);

  const onPlanetLoaded = planet => {
    setPlanet(planet);
    setLoading(false);
  }

  const onError = err => {
    setError(true);
    setLoading(false);
  }

  const updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    let swapiService = new SwapiService();
    swapiService
      .getPlanet(id)
      .then(onPlanetLoaded)
      .catch(onError);
  }

  return (
    <div className="random-planet jumbotron rounded">
      {error && <ErrorIndicator />}
      {loading && <Spinner />}
      {!(loading || error) && <PlanetView planet={planet}/>}
    </div>
  );
}

export default RandomPlanet;

const PlanetView = ({ planet }) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}