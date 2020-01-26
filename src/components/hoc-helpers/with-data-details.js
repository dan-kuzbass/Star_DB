import React, { useState, useEffect } from "react";

const forDetails = (Component, getData, getImageUrl) => props => {
  const [item, setItem] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    updateItem();
  }, [props.itemId]);

  const updateItem = () => {
    setLoading(true);
    if (!props.itemId) {
      return;
    }
    getData(props.itemId)
      .then(result => {
        setItem(result);
        setImage(getImageUrl(props.itemId))
        setLoading(false);
      })
  }
  return (
    <Component {...props} item={item} image={image} loading={loading} />
  )
}

// const {getStarship, getPersonImage} = new SwapiService();

// export default forDetails(ItemDetails, getStarship, getPersonImage);
export default forDetails;