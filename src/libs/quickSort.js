const partitionArray = (array, startIndex, endIndex, animations) => {
  let pivot = array[endIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex; i <= endIndex - 1; i++) {
    animations.push(['compare', i, null, endIndex, null]);
    animations.push(['changeBack', i, null, endIndex, null]);

    if (array[i] <= pivot) {
      animations.push(['swap', i, array[pivotIndex], pivotIndex, array[i]]);
      [array[i], array[pivotIndex]] = [array[pivotIndex], array[i]];
      pivotIndex++;
    }
  }

  animations.push([
    'swap',
    pivotIndex,
    array[endIndex],
    endIndex,
    array[pivotIndex],
  ]);
  [array[endIndex], array[pivotIndex]] = [array[pivotIndex], array[endIndex]];

  return pivotIndex;
};

const quickSortHelper = (array, startIndex, endIndex, animations) => {
  if (startIndex < endIndex) {
    const pivotIndex = partitionArray(array, startIndex, endIndex, animations);
    quickSortHelper(array, startIndex, pivotIndex - 1, animations);
    quickSortHelper(array, pivotIndex + 1, endIndex, animations);
  }
};

const quickSort = (randomArray) => {
  const animations = [];
  const array = randomArray.slice();

  quickSortHelper(array, 0, array.length - 1, animations);

  return [array, animations];
};

export default quickSort;
