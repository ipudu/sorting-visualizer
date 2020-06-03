import React, { useState, useContext } from 'react';

import Header from './Header';
import StartButton from './Buttons/StartButton';
import SpinnerButton from './Buttons/SpinnerButton';
import ResetButton from './Buttons/ResetButton';
import Footer from './Footer';

import {
  bubbleSort,
  insertionSort,
  mergeSort,
  selectionSort,
  quickSort,
} from '../libs/';
import { SortingVisualizerContext } from './SortingVisualizerContext';
import resetArray from '../libs/helper';

const ALGORITHMS = [
  'Bubble Sort',
  'Insertion Sort',
  'Merge Sort',
  'Quick Sort',
  'Selection Sort',
];

const COLORS = {
  compare: '#d92027',
  changeBack: '#35d0ba',
  swap: '#35d0ba',
  overWrite: '#ff9234',
  sorted: '#ffcd3c',
};

const SideBar = () => {
  const { numbers, setNumbers, algorithm, setAlgorithm } = useContext(
    SortingVisualizerContext
  );
  const [speed, setSpeed] = useState(10);
  const [showStartButton, setShowStartButton] = useState(true);

  const sortingAlgorithms = {
    'Bubble Sort': bubbleSort,
    'Insertion Sort': insertionSort,
    'Merge Sort': mergeSort,
    'Quick Sort': quickSort,
    'Selection Sort': selectionSort,
  };

  const changeBars = (color, barOne, barOneValue, barTwo, barTwoValue) => {
    const arrayBars = document.getElementsByClassName('array-bar');

    arrayBars[barOne].style.backgroundColor = color;
    if (barOneValue !== null) {
      arrayBars[barOne].style.height = `${barOneValue}vh`;
      if (arrayBars[barOne].textContent !== '') {
        arrayBars[barOne].textContent = `${barOneValue}`;
      }
    }

    arrayBars[barTwo].style.backgroundColor = color;
    if (barTwoValue !== null) {
      arrayBars[barTwo].style.height = `${barTwoValue}vh`;
      if (arrayBars[barTwo].textContent !== '') {
        arrayBars[barTwo].textContent = `${barTwoValue}`;
      }
    }
  };

  const changeBarColorBack = () => {
    [].map.call(document.getElementsByClassName('array-bar'), (bar) => {
      bar.style.backgroundColor = `${COLORS.changeBack}`;
    });
  };

  const start = () => {
    // hide start button
    setShowStartButton(false);

    const [sortedArray, animations] = sortingAlgorithms[algorithm](numbers);

    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        const color = COLORS[animations[i][0]];
        const [, barOne, barOneValue, barTwo, barTwoValue] = animations[i];
        changeBars(color, barOne, barOneValue, barTwo, barTwoValue);
      }, (i * 1000) / speed);
    }

    setTimeout(() => {
      // change color back
      changeBarColorBack();

      // show start button
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
