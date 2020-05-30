import React from 'react';

const ArrayBar = ({ number, size }) => {
  return (
    <div className="array-bar flex-fill" style={{ height: `${number}vh` }}>
      {size < 30 ? number : null}
    </div>
  );
};

export default ArrayBar;
