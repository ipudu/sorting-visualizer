import React from 'react';

import SideBar from './SideBar';
import Visualizer from './Visualizer';
import '../styles/App.css';

const App = () => {
  return (
    <div className="App container-fluid d-flex">
      <SideBar />
      <Visualizer />
    </div>
  );
};

export default App;
