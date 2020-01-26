import React, { useState } from "react";
import "./index.css";
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from "../../services/swapi-service";
import Row from "../row";

const PeoplePage = props => {

  const [selectedPerson, setSelectedPerson] = useState(3);

  const onPersonSelected = id => {
    setSelectedPerson(id);
  }

  const swapiService = new SwapiService();
  const itemList = (
    <ItemList
      onItemSelected={onPersonSelected}
      getData={swapiService.getAllPeople}
      renderItem={({ name, gender, birthYear }) =>
        `${name} (${gender}, ${birthYear})`
      } />
  )
  const personDetails = (
    <PersonDetails personId={selectedPerson} />
  );

  return (
    <Row left={itemList} right={personDetails} />
  )
}

export default PeoplePage;