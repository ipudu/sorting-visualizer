const merge = (array, startIndex, middleIndex, endIndex, animations) => {
  let sortArray = [];
  let i = startIndex;
  let j = middleIndex + 1;

  while (i <= middleIndex && j <= endIndex) {
    animations.push(['compare', i, null, j, null]);
    animations.push(['changeBack', i, null, j, null]);

    if (array[i] <= array[j]) {
      animations.push([
        'overWrite',
        sortArray.length + startIndex,
        array[i],
        sortArray.length + startIndex,
        array[i],
      ]);
      animations.push([
        'changeBack',
        sortArray.length + startIndex,
        array[i],
        sortArray.length + startIndex,
        array[i],
      ]);
      sortArray.push(array[i++]);
    } else {
      animations.push([
        'overWrite',
        sortArray.length + startIndex,
        array[j],
        sortArray.length + startIndex,
        array[j],
      ]);
      animations.push([
        'changeBack',
        sortArray.length + startIndex,
        array[j],
        sortArray.length + startIndex,
        array[j],
      ]);
      sortArray.push(array[j++]);
    }
  }
  while (i <= middleIndex) {
    animations.push(['compare', i, null, i, null]);
    animations.push(['changeBack', i, null, i, null]);
    animations.push([
      'overWrite',
      sortArray.length + startIndex,
      array[i],
      sortArray.length + startIndex,
      array[i],
    ]);
    animations.push([
      'changeBack',
      sortArray.length + startIndex,
      array[i],
      sortArray.length + startIndex,
      array[i],
    ]);
    sortArray.push(array[i++]);
  }
  while (j <= endIndex) {
    animations.push(['compare', j, null, j, null]);
    animations.push(['changeBack', j, null, j, null]);
    animations.push([
      'overWrite',
      sortArray.length + startIndex,
      array[j],
      sortArray.length + startIndex,
      array[j],
    ]);
    animations.push([
      'changeBack',
      sortArray.length + startIndex,
      array[j],
      sortArray.length + startIndex,
      array[j],
    ]);
    sortArray.push(array[j++]);
  }
  for (let i = startIndex; i <= endIndex; i++) {
    array[i] = sortArray[i - startIndex];
  }
};

const mergeHelper = (array, startIndex, endIndex, animations) => {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeHelper(array, startIndex, middleIndex, animations);
  mergeHelper(array, middleIndex + 1, endIndex, animations);
  merge(array, startIndex, middleIndex, endIndex, animations);
};

const mergeSort = (randomArray) => {
  const animations = [];
  const array = randomArray.slice();
  mergeHelper(array, 0, randomArray.length - 1, animations);

  return [array, animations];
};

export default mergeSort;
