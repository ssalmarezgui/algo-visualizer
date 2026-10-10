import React from 'react';
import { SORTING_ALGORITHMS } from '../algorithms/registry';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import type { AlgorithmInfo } from '../types';

interface HomeProps {
  onSelectAlgorithm: (algo: AlgorithmInfo) => void; // Fonction déclenchée au clic sur un algo
}

export const Home: React.FC<HomeProps> = ({ onSelectAlgorithm }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      
      {/* En-tête de la page d'accueil */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Visualisation interactive & dynamique</span>
        </div>
        <h2 className="text-4xl font-extrabold text-slate-100 tracking-tight mb-4">
          Explorez les algorithmes de tri en action
        </h2>
        <p className="text-slate-400 text-base">
          Sélectionnez un algorithme ci-dessous pour lancer sa simulation pas à pas, comprendre son fonctionnement et analyser ses performances.
        </p>
      </div>

      {/* Grille des boutons / cartes d'algorithmes (Grid-buttons) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SORTING_ALGORITHMS.map((algo) => (
          <div
            key={algo.id}
            onClick={() => onSelectAlgorithm(algo)}
            className="group bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-sky-500/50 rounded-2xl p-6 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-sky-500/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-sky-500/10 text-sky-400 font-bold text-lg px-3 py-1 rounded-xl border border-sky-500/20">
                  {algo.name}
                </span>
                <div className="w-10 h-10 rounded-xl bg-slate-800 group-hover:bg-sky-500 group-hover:text-white text-slate-400 flex items-center justify-center transition-all">
                  <Play className="w-4 h-4 fill-current" />
                </div>
              </div>

              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                {algo.description}
              </p>
            </div>

            <div>
              {/* Badges de complexité */}
              <div className="flex items-center gap-2 mb-4 pt-4 border-t border-slate-800/80 text-xs">
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                  Temps : <strong className="text-sky-400">{algo.timeComplexity}</strong>
                </span>
                <span className="bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                  Espace : <strong className="text-sky-400">{algo.spaceComplexity}</strong>
                </span>
              </div>

              <div className="flex items-center text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                <span>Lancer la simulation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};