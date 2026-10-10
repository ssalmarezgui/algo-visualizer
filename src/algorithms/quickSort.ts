Vous êtes un expert développeur en TypeScript et React. Votre tâche consiste à créer un nouveau module d'algorithme de tri pour notre application web "AlgoVisualizer". Voici la structure pour le fichier TypeScript :


import type { AlgorithmInfo, SortingStep } from '../types';

export const quicksortInfo: AlgorithmInfo = {
  id: 'quicksort',
  name: 'Quick Sort',
  description: 'Un algorithme de tri efficace en temps qui utilise la division récursive.',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(log n)',
};

export const QUICK_SORT_CODE_LINES: string[] = [
  'function quickSort(arr: number[], left: number, right: number) {',
  '  if (left < right) {',
  '    const pivotIndex = partition(arr, left, right);',
  '    quickSort(arr, left, pivotIndex - 1);',
  '    quickSort(arr, pivotIndex + 1, right);',
  '  }',
  '}',
  'function partition(arr: number[], left: number, right: number): number {',
  '  const pivot = arr[right];',
  '  let i = left;',
  '  for (let j = left; j < right; j++) {',
  '    if (arr[j] < pivot) {',
  '      [arr[i], arr[j]] = [arr[j], arr[i]];',
  '      i++;',
  '    }',
  '  }',
  '  [arr[i], arr[right]] = [arr[right], arr[i]];',
  '  return i;',
  '}',
];

export function sort(array: number[]): SortingStep[] {
  return quickSort(array, 0, array.length - 1)
    .map((step, index) => ({
      index,
      array,
      activeLine: QUICK_SORT_CODE_LINES[index],
    }));
}

function quickSort(arr: number[], left: number, right: number): void {
  // Implémentation de la fonction quickSort ici
}


Ce code est un exemple de la structure pour la fonction de tri Quick Sort en TypeScript. Vous pouvez modifier le contenu de la fonction `quickSort()` pour implémenter le tri récursif.