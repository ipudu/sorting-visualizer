import React, { useContext } from 'react';

import ArrayBar from './ArrayBar';
import { SortingVisualizerContext } from './SortingVisualizerContext';

const Visualizer = () => {
  const [numbers] = useContext(SortingVisualizerContext);

  return (
    <div className="visualzer d-flex flex-row flex-fill justify-content-around align-items-end">
      {numbers.map((number, idx) => (
        <ArrayBar key={idx} number={number} size={numbers.length} />
      ))}
    </div>
  );
};

export default Visualizer;
