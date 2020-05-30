import React from 'react';

import ArrayBar from './ArrayBar';

const Visualizer = ({ numbers }) => {
  return (
    <div className="visualzer d-flex flex-row flex-fill justify-content-around align-items-end">
      {numbers.map((number, idx) => (
        <ArrayBar key={idx} number={number} size={numbers.length} />
      ))}
    </div>
  );
};

export default Visualizer;
