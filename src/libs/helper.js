// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const resetArray = (size) => {
  const array = [];
  for (let i = 0; i < size; i++) {
    array.push(randomIntFromInterval(5, 95));
  }
  return array;
};

export default resetArray;
