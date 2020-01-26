import React from "react";
import "./index.css";

const Row = ({ left, right }) => {
  return (
    <div className="row mb2" style={{ marginTop: "15px" }}>
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {right}
      </div>
    </div>
  )
}

export default Row;