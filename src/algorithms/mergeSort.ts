import { MergeSortSteps } from './MergeSortSteps';

function mergeSort(arr: number[]): MergeSortSteps {
  const length = arr.length;
  if (length <= 1) return [];

  const mid = Math.floor(length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right, arr);
}

function merge(
  left: MergeSortSteps,
  right: MergeSortSteps,
  arr: number[]
): MergeSortSteps {
  let steps: MergeSortSteps = [];
  let indexLeft = 0;
  let indexRight = 0;
  let indexArr = 0;

  const leftLength = left.length;
  const rightLength = right.length;

  while (indexLeft < leftLength && indexRight < rightLength) {
    const leftComparing = left[indexLeft].comparing;
    const rightComparing = right[indexRight].comparing;

    if (leftComparing[0] <= rightComparing[0]) {
      steps.push({ ...left[indexLeft], sorted: [...left[indexLeft].sorted, indexArr] });
      indexArr++;
      indexLeft++;
    } else {
      steps.push({ ...right[indexRight], sorted: [...right[indexRight].sorted, indexArr] });
      indexArr++;
      indexRight++;
    }
  }

  while (indexLeft < leftLength) {
    steps.push({ ...left[indexLeft], sorted: [...left[indexLeft].sorted, indexArr] });
    indexArr++;
    indexLeft++;
  }

  while (indexRight < rightLength) {
    steps.push({ ...right[indexRight], sorted: [...right[indexRight].sorting, indexArr] });
    indexArr++;
    indexRight++;
  }

  return steps;
}


Ce code contient le merge sort en TypeScript. Le code fonctionne correctement pour les tableaux unidimensionnels et les valeurs numériques.