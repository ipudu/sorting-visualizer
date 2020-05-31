const selectionSort = (array) => {
  const animations = [];
  const auxillaryArray = array.slice();
  const N = auxillaryArray.length;
  for (let i = 0; i < N - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < N; j++) {
      animations.push(['comparision1', j, minIndex]);
      animations.push(['comparision2', j, minIndex]);
      if (auxillaryArray[j] < auxillaryArray[minIndex]) minIndex = j;
    }
    animations.push(['swap', minIndex, auxillaryArray[i]]);
    animations.push(['swap', i, auxillaryArray[minIndex]]);

    // Swap the found minimum element with the first element
    [auxillaryArray[i], auxillaryArray[minIndex]] = [
      auxillaryArray[minIndex],
      auxillaryArray[i],
    ];
  }

  return [auxillaryArray, animations];
};

export default selectionSort;
