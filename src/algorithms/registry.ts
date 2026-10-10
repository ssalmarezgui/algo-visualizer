
import { selectionInfo, SELECTION_CODE_LINES, selectionSort } from './selectionSort';
import { insertionInfo, INSERTION_CODE_LINES, insertionSort } from './insertionSort';
import { BUBBLE_CODE_LINES, bubbleInfo, bubbleSort } from './bublleSort';

// 1. La liste pour afficher les cartes sur la page d'accueil (Home.tsx)
export const SORTING_ALGORITHMS = [
  bubbleInfo,
  selectionInfo,
  insertionInfo,
];

// 2. Le dictionnaire pour récupérer dynamiquement le code et la fonction de tri dans le Visualizer
export const ALGORITHM_REGISTRY: Record<string, { codeLines: string[]; sortFn: (arr: number[]) => any }> = {
  bubble: { codeLines: BUBBLE_CODE_LINES, sortFn: bubbleSort },
  selection: { codeLines: SELECTION_CODE_LINES, sortFn: selectionSort },
  insertion: { codeLines: INSERTION_CODE_LINES, sortFn: insertionSort },
};