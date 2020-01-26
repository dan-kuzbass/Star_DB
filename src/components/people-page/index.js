import React, { useState } from "react";
import "./index.css";
import ItemList from '../item-list';
import ItemDetails from '../item-details';
import SwapiService from "../../services/swapi-service";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

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
    >
      {(i) =>
        `${i.name} (${i.birthYear})`
      }
    </ItemList>
  )
  const personDetails = (
    <ItemDetails itemId={selectedPerson} />
  );

  return (
    <ErrorBoundry>
      <Row left={itemList} right={personDetails} />
    </ErrorBoundry>
  )
}

export default PeoplePage;