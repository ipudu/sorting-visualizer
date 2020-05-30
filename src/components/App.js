import React, { useState } from 'react';

import SideBar from './SideBar';
import Visualizer from './Visualizer';
import '../styles/App.css';

import resetArray from '../libs/helper';
import selectionSort from '../libs/selectionSort';

const PRIMARY_COLOR = '#3fc1c9';
const SECONDARY_COLOR = '#fc5185';

const App = () => {
  const [numbers, setNumbers] = useState(resetArray(10));
  const [speed, setSpeed] = useState(10);
  const [algorithm, setAlgorithm] = useState('');

  const changeArraySize = (newSize) => {
    setNumbers(resetArray(newSize));
  };

  const changeSpeed = (newSpeed) => {
    setSpeed(newSpeed);
  };

  const changeAlgorithm = (algorithmName) => {
    setAlgorithm(algorithmName);
  };

  const newNumbers = () => {
    setNumbers(resetArray(numbers.length));
  };

  const startSelectionSort = () => {
    const [sortArray, animations] = selectionSort(numbers);
    for (let i = 0; i < animations.length; i++) {
      const isColorChange =
        animations[i][0] === 'comparision1' ||
        animations[i][0] === 'comparision2';
      const arrayBars = document.getElementsByClassName('array-bar');

      if (isColorChange === true) {
        const color =
          animations[i][0] === 'comparision1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [temp, barOneIndex, barTwoIndex] = animations[i];

        const barOneStyle = arrayBars[barOneIndex].style;
        const barTwoStyle = arrayBars[barTwoIndex].style;

        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, (i * 1000) / speed);
      } else {
        const [temp, barIndex, newNumber] = animations[i];
        const bar = arrayBars[barIndex];
        setTimeout(() => {
          bar.style.height = `${newNumber}vh`;
          if (bar.textContent !== '') bar.textContent = `${newNumber}`;
        }, (i * 1000) / speed);
      }
    }
  };

  const start = () => {
    switch (algorithm) {
      case 'Selection Sort':
        return startSelectionSort();
      default:
        return;
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
