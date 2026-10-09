// Definition de la structure d'une etape pour l'animation d'un tri

export interface SortingStep{
    array: number[]; // l'etat du tab a cette etape precise
    comparing: number[]; // les indices des elements en cours de comparaison
    swapping: number[]; // les indices des elements en cours d'echange
    sorted: number[]; // les indices des elements deja definitivement tries
    activeLine?: number; 
}


// Definition de la structure d'un algorithme pour la grille du menu

export interface AlgorithmInfo{
    id: string; // id unique
    name: string; // nom affiche
    description: string; // courte description
    timeComplexity: string; // complexite temporelle
    spaceComplexity: string; // complexite spatiale
}