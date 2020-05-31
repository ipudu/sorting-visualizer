const bubbleSort = (randomArray) => {
  const animations = [];
  const array = randomArray.slice();
  const N = array.length;

  let j = N - 1;

  while (j > 0) {
    for (let i = 0; i < j; i++) {
      animations.push(['compare', i, array[i], i + 1, array[i + 1]]);
      animations.push(['changeBack', i, array[i], i + 1, array[i + 1]]);

      if (array[i] > array[i + 1]) {
        animations.push(['swap', i, array[i + 1], i + 1, array[i]]);

        // Swap
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    animations.push(['sorted', j, array[j], j, array[j]]);
    j -= 1;
  }
  return [array, animations];
};

export default bubbleSort;
