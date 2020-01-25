import React, { useState, useEffect } from 'react';

import './index.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner/index";

const ItemList = props => {

  const [peopleList, setPeopleList] = useState(null);
  const swapiService = new SwapiService();
  useEffect(() => {
    swapiService
      .getAllPeople()
      .then(peoplesList => {
        setPeopleList(peoplesList)
      })
  }, [])

  const renderItems = array => {
    return array.map(({id, name}) => {
      return <li className="list-group-item"
          key={id} 
          onClick={() => {props.onItemSelected(id)}}>
        {name}
      </li>
    })
  }

  if (!peopleList) {
    return <Spinner/>
  }  
  return (
    <ul className="item-list list-group">
      {renderItems(peopleList)}
    </ul>
  );
}

export default ItemList;
