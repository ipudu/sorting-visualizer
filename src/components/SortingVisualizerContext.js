import React, { useState, createContext } from 'react';

import resetArray from '../libs/helper';

export const SortingVisualizerContext = createContext();

export const SortingVisualizerProvider = (props) => {
  const [numbers, setNumbers] = useState(resetArray(10));

  return (
    <SortingVisualizerContext.Provider value={[numbers, setNumbers]}>
      {props.children}
    </SortingVisualizerContext.Provider>
  );
};
