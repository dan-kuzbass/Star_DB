import React, { useState, useEffect } from 'react';

import './index.css';
import Spinner from "../spinner/index";
import SwapiService from "../../services/swapi-service";

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

export { Record };

const ItemDetails = props => {

  if (!props.item) {
    return <span>Select a item from list</span>
  }

  const content = props.loading
    ? <Spinner />
    : <React.Fragment>
      <img className="item-image"
        src={props.image} />
      <div className="card-body">
        <h4>{props.item.name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(props.children, (child) => {
              return React.cloneElement(child, { item: props.item });
            })
          }
        </ul>
      </div>
    </React.Fragment>

  return (
    <div className="item-details card">
      {content}
    </div>
  )
}

export default ItemDetails;
