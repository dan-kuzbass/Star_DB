import React, { useState, useEffect } from 'react';
import Spinner from "../spinner/index";

const withData = (Component, getData) => props => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getData()
      .then(fetchData => {
        setData(fetchData)
      })
  }, [])
  if (!data) {
    return <Spinner />
  }
  return (
    <Component {...props} data={data} />
  )
}

export default withData;