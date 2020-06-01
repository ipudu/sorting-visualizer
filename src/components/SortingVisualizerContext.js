import React, { useState, createContext } from 'react';

import resetArray from '../libs/helper';

export const SortingVisualizerContext = createContext();

export const SortingVisualizerProvider = (props) => {
  const [numbers, setNumbers] = useState(resetArray(10));
  const [algorithm, setAlgorithm] = useState('Bubble Sort');

  return (
    <SortingVisualizerContext.Provider
      value={{ numbers, setNumbers, algorithm, setAlgorithm }}
    >
      {props.children}
    </SortingVisualizerContext.Provider>
  );
};
