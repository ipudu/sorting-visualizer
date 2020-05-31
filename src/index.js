import React from 'react';
import ReactDOM from 'react-dom';

import { SortingVisualizerProvider } from './components/SortingVisualizerContext';
import App from './components/App';

ReactDOM.render(
  <SortingVisualizerProvider>
    <App />
  </SortingVisualizerProvider>,
  document.getElementById('root')
);
