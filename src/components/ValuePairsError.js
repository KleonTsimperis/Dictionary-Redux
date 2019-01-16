import React from 'react';
import './Components.css';

const ValuePairsError = ({value}: number) =>
  <div className="container">
    <button className="item error">
      {value}
    </button>
    <div className="item">
      {value === 1? <div>Duplicate</div>:""}
      {value === 2? <div>Fork</div>:""}
      {value === 3? <div>Chains</div>:""}
      {value === 4? <div>Cycles</div>:""}
    </div>
  </div>;

export default ValuePairsError;
