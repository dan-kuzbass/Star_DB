import React from 'react';

import './index.css';

const ItemList = ({ children, onItemSelected, data }) => {

  const renderItems = array => {
    return array.map(item => {
      const { id } = item;
      const label = children(item);
      return <li className="list-group-item"
        key={id}
        onClick={() => { onItemSelected(id) }}>
        {label}
      </li>
    })
  }
  return (
    <ul className="item-list list-group">
      {renderItems(data)}
    </ul>
  );
}

export default ItemList;
