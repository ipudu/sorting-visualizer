const bubbleSort = (array) => {
  const animations = [];
  const auxillaryArray = array.slice();
  const N = auxillaryArray.length;

  let j = N - 1;

  while (j > 0) {
    for (let i = 0; i < j; i++) {
      animations.push(['comparision1', i, i + 1]);
      animations.push(['comparision2', i, i + 1]);

      if (auxillaryArray[i] > auxillaryArray[i + 1]) {
        animations.push(['swap', i, auxillaryArray[i + 1]]);
        animations.push(['swap', i + 1, auxillaryArray[i]]);

        // Swap
        [auxillaryArray[i], auxillaryArray[i + 1]] = [
          auxillaryArray[i + 1],
          auxillaryArray[i],
        ];
      }
    }
    j -= 1;
  }
  return animations;
};

export default bubbleSort;
