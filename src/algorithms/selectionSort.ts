import type { SortingStep } from '../types';

// Le code Python affiché pour le Selection Sort
export const SELECTION_CODE_LINES = [
  "def selection_sort(arr):",              // Ligne 1
  "    n = len(arr)",                  // Ligne 2
  "    for i in range(n):",            // Ligne 3
  "        min_idx = i",               // Ligne 4
  "        for j in range(i+1, n):",   // Ligne 5
  "            if arr[j] < arr[min_idx]:", // Ligne 6 (Comparaison)
  "                min_idx = j",       // Ligne 7
  "        arr[i], arr[min_idx] = arr[min_idx], arr[i]" // Ligne 8 (Swap)
];

export const selectionSort = (array: number[]): SortingStep[] => {
  const steps: SortingStep[] = [];
  const arr = [...array];
  const n = arr.length;
  const sortedIndices: number[] = [];

  for (let i = 0; i < n; i++) {
    let minIdx = i;

    // Ligne 4: min_idx = i
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [],
      sorted: [...sortedIndices],
      activeLine: 4,
    });

    for (let j = i + 1; j < n; j++) {
      // Ligne 6: if arr[j] < arr[min_idx]: (Comparaison)
      steps.push({
        array: [...arr],
        comparing: [j, minIdx],
        swapping: [],
        sorted: [...sortedIndices],
        activeLine: 6,
      });

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        // Ligne 7: min_idx = j
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [minIdx],
          sorted: [...sortedIndices],
          activeLine: 7,
        });
      }
    }

    if (minIdx !== i) {
      // Ligne 8: Swap
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [i, minIdx],
        sorted: [...sortedIndices],
        activeLine: 8,
      });
    }

    sortedIndices.push(i);
  }

  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    sorted: [...sortedIndices],
    activeLine: 0,
  });

  return steps;
};