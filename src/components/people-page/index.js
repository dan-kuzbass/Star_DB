import React, { useState } from "react";
import "./index.css";
import ItemList from '../item-list';
import PersonDetails from '../person-details';

const PeoplePage = props => {

  const [selectedPerson, setSelectedPerson] = useState(3);

  const onPersonSelected = id => {
    setSelectedPerson(id);
  }

  return (
    <div className="row mb2" style={{marginTop: "15px"}}>
      <div className="col-md-6">
        <ItemList onItemSelected={onPersonSelected} />
      </div>
      <div className="col-md-6">
        <PersonDetails personId={selectedPerson} />
      </div>
    </div>
  )
}

export default PeoplePage;