import React, { useState, useEffect } from 'react';

import './index.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/index";

const PersonDetails = ({ personId }) => {

  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(null);
  const swapiService = new SwapiService();
  useEffect(() => {
    updatePerson();
  }, [personId]);

  const updatePerson = () => {
    setLoading(true);
    if (!personId) {
      return;
    }
    swapiService.getPerson(personId)
      .then(result => {
        setPerson(result);
        setLoading(false);
      })
  }

  if (!person) {
    return <span>Select a person from list</span>
  }

  const content = loading
    ? <Spinner />
    : <React.Fragment>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${person.id}.jpg`} />
      <div className="card-body">
        <h4>{person.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{person.gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{person.birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{person.eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>

  //if (loading) return <Spinner />

  return (
    <div className="person-details card">
      {content}
    </div>
  )
}

export default PersonDetails;
