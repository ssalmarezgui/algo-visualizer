import type { SortingStep } from '../types';

// Le code Python affiché pour le Bubble Sort
export const BUBBLE_CODE_LINES = [
  "def bubble_sort(arr):",              // Ligne 1
  "    n = len(arr)",                  // Ligne 2
  "    for i in range(n - 1):",        // Ligne 3
  "        for j in range(n - 1 - i):",// Ligne 4
  "            if arr[j] > arr[j + 1]:", // Ligne 5 (Comparaison)
  "                arr[j], arr[j + 1] = arr[j + 1], arr[j]" // Ligne 6 (Swap)
];

export const bubbleSort = (array: number[]): SortingStep[] => {
  const steps: SortingStep[] = [];
  const arr = [...array];
  const n = arr.length;
  const sortedIndices: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      
      // Ligne 4: Boucle j
      steps.push({
        array: [...arr],
        comparing: [],
        swapping: [],
        sorted: [...sortedIndices],
        activeLine: 4, 
      });

      // Ligne 5: Comparaison
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
        sorted: [...sortedIndices],
        activeLine: 5, 
      });

      if (arr[j] > arr[j + 1]) {
        // Ligne 6: Échange (Swap)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;

        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j, j + 1],
          sorted: [...sortedIndices],
          activeLine: 6, 
        });
      }
    }

    sortedIndices.push(n - 1 - i);

    if (!swapped) {
      break; 
    }
  }

  for (let i = 0; i < n; i++) {
    if (!sortedIndices.includes(i)) {
      sortedIndices.push(i);
    }
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