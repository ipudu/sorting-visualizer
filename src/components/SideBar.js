import React, { useState, useEffect } from 'react';

const Header = () => (
  <div className="header text-center">
    <h1>Sorting Visualizer</h1>
  </div>
);

const Footer = () => (
  <div className="footer text-center">
    Made with <i className="fas fa-heart fa-lg heart"></i> by
    <a href="https://pudu.io"> Pu Du</a>
  </div>
);

const SideBar = (props) => {
  const algos = [
    'Bubble Sort',
    'Insertion Sort',
    'Selection Sort',
    'Merge Sort',
    'Quick Sort',
    'Tim Sort',
    'Heap Sort',
  ];

  const [showStartButton, setShowStartButton] = useState(false);

  useEffect(() => {
    setShowStartButton(!showStartButton);
  }, [props.isSorting]);

  const howFast = (speed) => {
    if (speed >= 700) {
      return 'fast';
    } else if (speed >= 300) {
      return 'intermediate';
    } else {
      return 'slow';
    }
  };

  const describeSpeed = howFast(props.speed);

  return (
    <div className="side-bar d-flex flex-column justify-content-center">
      <Header />

      <form>
        <div className="form-group">
          <label>Array Size: {props.arraySize}</label>
          <input
            className="slider gray"
            type="range"
            min="10"
            max="100"
            value={props.arraySize}
            onChange={(e) => {
              props.changeArraySize(e.target.value);
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
            value={props.speed}
            onChange={(e) => {
              props.changeSpeed(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label>Sorting Algorithm</label>
          <select
            className="form-control"
            value={props.algorithm}
            onChange={(e) => props.changeAlgorithm(e.target.value)}
          >
            {algos.map((a, i) => (
              <option key={i} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          {showStartButton ? (
            <button
              type="button"
              className="button btn btn-primary btn-lg btn-block"
              onClick={() => {
                setShowStartButton(!showStartButton);
                props.start();
              }}
            >
              <i className="start fas fa-play-circle fa-2x"></i>
            </button>
          ) : (
            <button
              className="button btn btn-success btn-lg btn-block"
              type="button"
              disabled
            >
              <span
                className="spinner-border"
                role="status"
                aria-hidden="true"
              ></span>
            </button>
          )}
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default SideBar;
