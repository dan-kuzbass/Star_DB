import React, { useState, useEffect } from 'react';

import './index.css';
import Spinner from "../spinner/index";

const Record = ({item, field, label}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
}

export { Record };

const ItemDetails = ({ itemId, getData, getImageUrl, children }) => {

  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    updateItem();
  }, [itemId]);

  const updateItem = () => {
    setLoading(true);
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then(result => {
        setItem(result);
        setImage(getImageUrl(itemId))
        setLoading(false);
      })
  }

  if (!item) {
    return <span>Select a item from list</span>
  }

  const content = loading
    ? <Spinner />
    : <React.Fragment>
      <img className="item-image"
        src={image} />
      <div className="card-body">
        <h4>{item.name}</h4>
        <ul className="list-group list-group-flush">
          {
            React.Children.map(children, (child) => {
              return React.cloneElement(child, { item });
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
