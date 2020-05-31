import React, { useState } from 'react';

import SideBar from './SideBar';
import Visualizer from './Visualizer';
import '../styles/App.css';

import resetArray from '../libs/helper';
import { bubbleSort, selectionSort } from '../libs/';

const PRIMARY_COLOR = '#3fc1c9';
const SECONDARY_COLOR = '#fc5185';

const App = () => {
  const [numbers, setNumbers] = useState(resetArray(10));
  const [speed, setSpeed] = useState(10);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');

  const changeArraySize = (newSize) => {
    setNumbers(resetArray(newSize));
  };

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const changeAlgorithm = (algorithmName) => {
    setAlgorithm(algorithmName);
  };

  const sortingAlgorithms = {
    'Bubble Sort': bubbleSort,
    'Selection Sort': selectionSort,
  };

  const start = () => {
    const animations = sortingAlgorithms[algorithm](numbers);

    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparision1' ||
        animations[i][0] === 'comparision2';
      const arrayBars = document.getElementsByClassName('array-bar');

      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparision1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [, barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, (i * 1000) / speed);
      } else {
        const [, barIndex, newNumber] = animations[i];
        const bar = arrayBars[barIndex];
        setTimeout(() => {
          bar.style.height = `${newNumber}vh`;
          if (bar.textContent !== '') bar.textContent = `${newNumber}`;
        }, (i * 1000) / speed);
      }
    }
  };

  return (
    <div className="App container-fluid d-flex">
      <SideBar
        arraySize={numbers.length}
        changeArraySize={changeArraySize}
        speed={speed}
        changeSpeed={changeSpeed}
        algorithm={algorithm}
        changeAlgorithm={changeAlgorithm}
        start={start}
      />
      <Visualizer numbers={numbers} />
    </div>
  );
};

export default App;
