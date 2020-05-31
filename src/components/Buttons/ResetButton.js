import React from 'react';

const ResetButton = () => {
  const reset = () => {
    window.location.reload();
  };
  return (
    <button
      type="button"
      className="button btn btn-danger btn-lg btn-block"
      onClick={reset}
    >
      RESET
    </button>
  );
};

export default ResetButton;
