import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components/Button';
import { Play, Pause, RotateCcw, ArrowLeft, FastForward, Code } from 'lucide-react';
import type { AlgorithmInfo, SortingStep } from '../types';
import { BUBBLE_CODE_LINES, bubbleSort } from '../algorithms/bublleSort';
import { SELECTION_CODE_LINES, selectionSort } from '../algorithms/selectionSort';
import { INSERTION_CODE_LINES, insertionSort } from '../algorithms/insertionSort';

interface VisualizerProps {
  algorithm: AlgorithmInfo;
  onBack: () => void;
}



export const Visualizer: React.FC<VisualizerProps> = ({ algorithm, onBack }) => {
  const [array, setArray] = useState<number[]>([]);
  const [steps, setSteps] = useState<SortingStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(150);
  const [comparedIndices, setComparedIndices] = useState<number[]>([]);
  const [swappedIndices, setSwappedIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [activeLine, setActiveLine] = useState<number | null>(null);

  const timeoutRef = useRef<number | null>(null);

  const codeLines = 
    algorithm.id === 'selection' ? SELECTION_CODE_LINES :
    algorithm.id === 'insertion' ? INSERTION_CODE_LINES : 
    BUBBLE_CODE_LINES;
  const generateNewArray = () => {
    setIsPlaying(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    const randomArray = Array.from({ length: 10 }, () => Math.floor(Math.random() * 80) + 10);
    setArray(randomArray);

    let computedSteps: React.SetStateAction<SortingStep[]> = [];
    if (algorithm.id === 'bubble') {
        computedSteps = bubbleSort(randomArray);
    } else if (algorithm.id === 'selection') {
        computedSteps = selectionSort(randomArray);
    } else if (algorithm.id === 'insertion') {
        computedSteps = insertionSort(randomArray);
    }
    setSteps(computedSteps);

    setCurrentStepIndex(0);
    setComparedIndices([]);
    setSwappedIndices([]);
    setSortedIndices([]);
    setActiveLine(null);
    };
  useEffect(() => {
    generateNewArray();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [algorithm]);

  useEffect(() => {
    if (isPlaying && steps.length > 0) {
      if (currentStepIndex < steps.length) {
        timeoutRef.current = setTimeout(() => {
          const step = steps[currentStepIndex];
          setArray(step.array);
          setComparedIndices(step.comparing);
          setSwappedIndices(step.swapping);
          setSortedIndices(step.sorted);
          setActiveLine(step.activeLine !== undefined ? step.activeLine : null);
          setCurrentStepIndex((prev) => prev + 1);
        }, speed);
      } else {
        setIsPlaying(false);
      }
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPlaying, currentStepIndex, steps, speed]);

  const handlePlayPause = () => {
    if (currentStepIndex >= steps.length - 1) {
      setCurrentStepIndex(0);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center">
      
      {/* Barre supérieure */}
      <div className="w-full flex items-center justify-between mb-8">
        <Button 
          label="Retour au menu" 
          variant="secondary" 
          onClick={onBack} 
          icon={<ArrowLeft className="w-4 h-4" />} 
        />
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-100">{algorithm.name}</h2>
          <p className="text-xs text-slate-400">Simulation dynamique & Code source en direct</p>
        </div>
        <div className="text-xs font-semibold bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl">
          Étape : <span className="text-sky-400">{currentStepIndex}</span> / {steps.length}
        </div>
      </div>

      {/* --- GRILLE CENTRALE : BARRES (Gauche) + CODE SOURCE (Droite) --- */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        
        {/* Zone des Barres (2 colonnes sur 3) */}
        <div className="lg:col-span-2 h-96 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex items-end justify-center gap-3 shadow-2xl relative overflow-hidden">
          {array.map((value, idx) => {
            let bgColor = "bg-sky-500 shadow-sky-500/20";
            if (sortedIndices.includes(idx)) {
              bgColor = "bg-emerald-500 shadow-emerald-500/20";
            } else if (swappedIndices.includes(idx)) {
              bgColor = "bg-rose-500 shadow-rose-500/20";
            } else if (comparedIndices.includes(idx)) {
              bgColor = "bg-amber-400 shadow-amber-400/20";
            }

            return (
              <div
                key={idx}
                style={{ height: `${value}%` }}
                className={`flex-1 max-w-[45px] rounded-t-xl transition-all duration-150 flex flex-col items-center justify-start pt-2 shadow-lg ${bgColor}`}
              >
                <span className="text-[11px] font-bold text-slate-950">{value}</span>
              </div>
            );
          })}
        </div>

        {/* --- BOÎTE DU CODE SOURCE EN DIRECT (1 colonne sur 3) --- */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between shadow-2xl font-mono text-xs">
          <div>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800 text-slate-400">
              <Code className="w-4 h-4 text-sky-400" />
              <span className="font-semibold">Code Source (Python Style)</span>
            </div>
            
            <div className="space-y-2">
              {codeLines.map((line, index) => {
                // Numéro de ligne logique (1, 2, 3, 4, 5) correspondant au activeLine
                const lineNumber = index + 1;
                const isActive = activeLine === lineNumber;

                return (
                  <div
                    key={index}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-150 flex items-center gap-3 ${
                      isActive 
                        ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300 font-bold shadow-md' 
                        : 'text-slate-400 bg-slate-950/40'
                    }`}
                  >
                    <span className="text-slate-600 select-none">{lineNumber}</span>
                    <span className="truncate">{line}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 flex justify-between">
            <span>Statut : {isPlaying ? "En cours..." : "En pause"}</span>
            <span className="text-amber-400 font-semibold">{activeLine ? `Ligne ${activeLine} active` : ''}</span>
          </div>
        </div>

      </div>

      {/* --- PANNEAU DE CONTRÔLE --- */}
      <div className="w-full bg-slate-900 border border-slate-800 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <Button
            label={isPlaying ? "Pause" : "Lancer"}
            onClick={handlePlayPause}
            variant="primary"
            icon={isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          />
          <Button
            label="Réinitialiser"
            onClick={generateNewArray}
            variant="secondary"
            icon={<RotateCcw className="w-4 h-4" />}
          />
        </div>

        <div className="flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
          <FastForward className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold text-slate-300">Vitesse :</span>
          <input
            type="range"
            min="50"
            max="600"
            step="50"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="accent-sky-500 cursor-pointer"
          />
          <span className="text-xs text-slate-400 w-12 text-right">{speed}ms</span>
        </div>
      </div>

    </div>
  );
};