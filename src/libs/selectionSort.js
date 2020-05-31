const selectionSort = (randomArray) => {
  const animations = [];
  const array = randomArray.slice();

  const N = array.length;
  for (let i = 0; i < N - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < N; j++) {
      animations.push(['compare', j, array[j], minIndex, array[minIndex]]);
      animations.push(['changeBack', j, array[j], minIndex, array[minIndex]]);
      if (array[j] < array[minIndex]) minIndex = j;
    }

    animations.push(['swap', i, array[minIndex], minIndex, array[i]]);

    // Swap the found minimum element with the first element
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
    animations.push(['sorted', i, array[i], i, array[i]]);
  }

  return [array, animations];
};

export default selectionSort;
