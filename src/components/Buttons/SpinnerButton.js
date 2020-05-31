import React from 'react';

const SpinnerButton = () => (
  <button
    className="button btn btn-success btn-lg btn-block"
    type="button"
    disabled
  >
    <span className="spinner-border" role="status" aria-hidden="true"></span>
  </button>
);

export default SpinnerButton;
