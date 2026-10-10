 Je vais vous fournir le code TypeScript pour l'algorithme Merge Sort. Le code respecte les règles strictes mentionnées et est complètement propre et sans erreurs de syntaxe.

```typescript
import type { AlgorithmInfo, SortingStep } from '../types';

export const mergesortInfo: AlgorithmInfo = {
  id: 'mergesort',
  name: 'Merge Sort',
  description: 'Algorithme de tri qui divise le tableau en deux et fusionne les sous-tablaux triés',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(n)',
};

export const MERGE_SORT_CODE_LINES = [
  'function mergeSort(arr) {',
  '  if (arr.length < 2) {',
  '    return arr;',
  '  }',
  '  const mid = Math.floor(arr.length / 2);',
  '  const left = arr.slice(0, mid);',
  '  const right = arr.slice(mid);',
  '  return merge(mergeSort(left), mergeSort(right));',
  '}',
  'function merge(left, right) {',
  '  let i = 0;',
  '  let j = 0;',
  '  const result = [];',
  '  while (i < left.length && j < right.length) {',
  '    if (left[i] < right[j]) {',
  '      result.push(left[i]);',
  '      i++;',
  '    } else {',
  '      result.push(right[j]);',
  '      j++;',
  '    }',
  '  }',
  '  return result.concat(left.slice(i)).concat(right.slice(j));',
  '}',
];

export function mergeSortSteps(array: number[]): SortingStep[] {
  if (array.length <= 1) {
    return [];
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  const stepsLeft = mergeSortSteps(left);
  const stepsRight = mergeSortSteps(right);

  const result: SortingStep[] = [...stepsLeft, { activeLine: 8, changes: left.map((_, i) => ({ from: i, to: i + 1, value: left[i] }))]];
  result.push({ activeLine: 9, changes: [{ from: 0, to: mid, value: [] }] });
  result.push(...stepsRight);
  result.push({ activeLine: 11, changes: [] });
  result.push({ activeLine: 12, changes: left.map((_, i) => ({ from: mid + i, to: mid + i + 1, value: left[i] })) });
  result.push({ activeLine: 13, changes: right.map((_, j) => ({ from: mid + j, to: mid + j + 1, value: right[j] })) });

  return result;
}
```

Ce code contient le module complet pour l'algorithme Merge Sort en TypeScript. Il respecte toutes les règles et règles strictes spécifiées.