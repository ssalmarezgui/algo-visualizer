import type { AlgorithmInfo, SortingStep } from '../types';

// 1. Les métadonnées pour la grille du menu
export const bubbleInfo: AlgorithmInfo = {
  id: 'bubble',
  name: 'Bubble Sort',
  description: 'Compare les éléments adjacents et les échange s’ils sont dans le mauvais ordre.',
  timeComplexity: 'O(n²)',
  spaceComplexity: 'O(1)',
};

// 2. Le code source affiché dans le visualiseur
export const BUBBLE_CODE_LINES = [
  "def bubble_sort(arr):",
  "    n = len(arr)",
  "    for i in range(n - 1):",
  "        for j in range(n - 1 - i):",
  "            if arr[j] > arr[j + 1]:",
  "                arr[j], arr[j + 1] = arr[j + 1], arr[j]"
];

// 3. La logique de tri
export const bubbleSort = (array: number[]): SortingStep[] => {
  const steps: SortingStep[] = [];
  const arr = [...array];
  const n = arr.length;
  const sortedIndices: number[] = [];

  for (let i = 0; i < n - 1; i++) {
    let swapped = false;

    for (let j = 0; j < n - 1 - i; j++) {
      steps.push({ array: [...arr], comparing: [], swapping: [], sorted: [...sortedIndices], activeLine: 4 });
      steps.push({ array: [...arr], comparing: [j, j + 1], swapping: [], sorted: [...sortedIndices], activeLine: 5 });

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
        steps.push({ array: [...arr], comparing: [], swapping: [j, j + 1], sorted: [...sortedIndices], activeLine: 6 });
      }
    }

    sortedIndices.push(n - 1 - i);
    if (!swapped) break;
  }

  for (let i = 0; i < n; i++) {
    if (!sortedIndices.includes(i)) sortedIndices.push(i);
  }

  steps.push({ array: [...arr], comparing: [], swapping: [], sorted: [...sortedIndices], activeLine: 0 });
  return steps;
};