import React, { useState, useEffect } from 'react';

import './index.css';
import Spinner from "../spinner/index";

const ItemList = props => {

  const [itemList, setItemList] = useState(null);
  useEffect(() => {
    props.getData()
      .then(data => {
        setItemList(data)
      })
  }, [])

  const renderItems = array => {    
    return array.map(item => {
      const { id } = item;
      const label = props.children(item);
      return <li className="list-group-item"
          key={id} 
          onClick={() => {props.onItemSelected(id)}}>
        {label}
      </li>
    })
  }

  if (!itemList) {
    return <Spinner/>
  }  
  return (
    <ul className="item-list list-group">
      {renderItems(itemList)}
    </ul>
  );
}

export default ItemList;
