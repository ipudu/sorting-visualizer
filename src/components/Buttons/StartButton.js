import React from 'react';

const StartButton = ({ start }) => (
  <button
    type="button"
    className="button btn btn-primary btn-lg btn-block"
    onClick={start}
  >
    <i className="start fas fa-play-circle fa-2x"></i>
  </button>
);

export default StartButton;
