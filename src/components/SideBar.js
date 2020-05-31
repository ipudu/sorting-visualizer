import React, { useState, useContext } from 'react';

import Header from './Header';
import StartButton from './Buttons/StartButton';
import SpinnerButton from './Buttons/SpinnerButton';
import ResetButton from './Buttons/ResetButton';
import Footer from './Footer';

import { bubbleSort, selectionSort } from '../libs/';
import { SortingVisualizerContext } from './SortingVisualizerContext';
import resetArray from '../libs/helper';

const ALGORITHMS = [
  'Bubble Sort',
  'Insertion Sort',
  'Selection Sort',
  'Merge Sort',
  'Quick Sort',
  'Tim Sort',
  'Heap Sort',
];

const PRIMARY_COLOR = '#3fc1c9';
const SECONDARY_COLOR = '#fc5185';

const SideBar = () => {
  const [numbers, setNumbers] = useContext(SortingVisualizerContext);
  const [speed, setSpeed] = useState(10);
  const [algorithm, setAlgorithm] = useState('Bubble Sort');
  const [showStartButton, setShowStartButton] = useState(true);

  const sortingAlgorithms = {
    'Bubble Sort': bubbleSort,
    'Selection Sort': selectionSort,
  };

  const start = () => {
    setShowStartButton(false);
    const [sortedArray, animations] = sortingAlgorithms[algorithm](numbers);

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

    setTimeout(() => {
      setShowStartButton(true);
      setNumbers(sortedArray);
    }, (animations.length * 1000) / speed);
  };

  const howFast = (speed) => {
    if (speed >= 700) {
      return 'fast';
    } else if (speed >= 300) {
      return 'intermediate';
    } else {
      return 'slow';
    }
  };

  const describeSpeed = howFast(speed);

  return (
    <div className="side-bar d-flex flex-column justify-content-center">
      <Header />

      <form>
        <div className="form-group">
          <label>Array Size: {numbers.length}</label>
          <input
            className="slider gray"
            type="range"
            min="10"
            max="100"
            value={numbers.length}
            onChange={(e) => {
              setNumbers(resetArray(e.target.value));
            }}
          />
        </div>

        <div className="form-group">
          <label>Speed: {describeSpeed}</label>
          <input
            className="slider"
            type="range"
            min="1"
            max="1000"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Sorting Algorithm</label>
          <select
            className="form-control"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            {ALGORITHMS.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          {showStartButton ? (
            <StartButton start={start} />
          ) : (
            <>
              <SpinnerButton />
              <ResetButton />
            </>
          )}
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default SideBar;
