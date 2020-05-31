const insertionSort = (randomArray) => {
  const animations = [];
  const array = randomArray.slice();
  const N = array.length;

  for (let i = 1; i < N; i++) {
    let key = array[i];
    let j = i - 1;
    animations.push(['compare', j, array[j], i, array[i]]);
    animations.push(['changeBack', j, array[j], i, array[i]]);

    while (j >= 0 && array[j] > key) {
      animations.push(['overWrite', j + 1, array[j], j + 1, array[j]]);
      animations.push(['changeBack', j + 1, array[j], j + 1, array[j]]);
      array[j + 1] = array[j];
      j -= 1;

      if (j >= 0) {
        animations.push(['compare', j, array[j], i, array[i]]);
        animations.push(['changeBack', j, array[j], i, array[i]]);
      }
    }
    animations.push(['overWrite', j + 1, key, j + 1, key]);
    animations.push(['changeBack', j + 1, key, j + 1, key]);
    array[j + 1] = key;
  }
  return [array, animations];
};

export default insertionSort;
