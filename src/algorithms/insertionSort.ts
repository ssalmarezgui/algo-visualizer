import type { SortingStep } from '../types';

// Le code Python affiché pour l'Insertion Sort
export const INSERTION_CODE_LINES = [
  "def insertion_sort(arr):",              // Ligne 1
  "    for i in range(1, len(arr)):",      // Ligne 2
  "        key = arr[i]",                  // Ligne 3
  "        j = i - 1",                     // Ligne 4
  "        while j >= 0 and key < arr[j]:",// Ligne 5 (Comparaison)
  "            arr[j + 1] = arr[j]",       // Ligne 6 (Décalage)
  "            j -= 1",                    // Ligne 7
  "        arr[j + 1] = key"               // Ligne 8 (Insertion finale)
];

export const insertionSort = (array: number[]): SortingStep[] => {
  const steps: SortingStep[] = [];
  const arr = [...array];
  const n = arr.length;
  const sortedIndices: number[] = [0]; // Le premier élément est considéré comme trié au début

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    // Ligne 3 & 4 : key = arr[i], j = i - 1
    steps.push({
      array: [...arr],
      comparing: [i],
      swapping: [],
      sorted: [...sortedIndices],
      activeLine: 3,
    });

    // Ligne 5 : while j >= 0 and key < arr[j]:
    while (j >= 0) {
      steps.push({
        array: [...arr],
        comparing: [j, j + 1],
        swapping: [],
        sorted: [...sortedIndices],
        activeLine: 5,
      });

      if (arr[j] > key) {
        // Ligne 6 : Décalage
        arr[j + 1] = arr[j];
        steps.push({
          array: [...arr],
          comparing: [],
          swapping: [j, j + 1],
          sorted: [...sortedIndices],
          activeLine: 6,
        });
        j--;
      } else {
        break;
      }
    }

    // Ligne 8 : Insertion
    arr[j + 1] = key;
    steps.push({
      array: [...arr],
      comparing: [],
      swapping: [j + 1],
      sorted: [...sortedIndices],
      activeLine: 8,
    });

    // Ajouter l'élément à la liste des triés
    if (!sortedIndices.includes(i)) {
      sortedIndices.push(i);
    }
  }

  // Tous triés à la fin
  steps.push({
    array: [...arr],
    comparing: [],
    swapping: [],
    sorted: Array.from({ length: n }, (_, index) => index),
    activeLine: 0,
  });

  return steps;
};