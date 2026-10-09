import type { AlgorithmInfo } from "../types";

export const SORTING_ALGORITHMS: AlgorithmInfo[] = [
    {
        id: 'bubble',
        name: 'Bubble Sort',
        description: 'Compare les éléments adjacents et les échange s’ils sont dans le mauvais ordre.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
    },

    {
        id: 'selection',
        name: 'Selection Sort',
        description: 'Trouve le plus petit élément du tableau et le place au début, puis répète.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
    },
    {
        id: 'insertion',
        name: 'Insertion Sort',
        description: 'Construit le tableau trié un élément à la fois en insérant chaque élément à sa place.',
        timeComplexity: 'O(n²)',
        spaceComplexity: 'O(1)',
    },
]