import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { RecommendModal } from './components/RecommendModal';
import { Home } from './views/Home';
import { Visualizer } from './views/Visualizer';
import type { AlgorithmInfo } from './types';

export function App() {
  // États de navigation et d'affichage
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmInfo | null>(null);
  const [isRecommendOpen, setIsRecommendOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      
      {/* Barre de navigation supérieure (toujours visible) */}
      <Navbar 
        onGoHome={() => setSelectedAlgorithm(null)} 
        onOpenRecommend={() => setIsRecommendOpen(true)}
        title={selectedAlgorithm ? selectedAlgorithm.name : undefined}
      />

      {/* Contenu dynamique selon l'écran actif */}
      <main className="flex-1">
        {selectedAlgorithm === null ? (
          // Si aucun algorithme n'est sélectionné -> Afficher la page d'accueil (Grille de boutons)
          <Home onSelectAlgorithm={(algo) => setSelectedAlgorithm(algo)} />
        ) : (
          // Sinon -> Afficher la vue de simulation dynamique pour l'algorithme choisi
          <Visualizer 
            algorithm={selectedAlgorithm} 
            onBack={() => setSelectedAlgorithm(null)} 
          />
        )}
      </main>

      {/* Modale de suggestion d'algorithme (S'ouvre au clic sur le bouton de la Navbar) */}
      <RecommendModal 
        isOpen={isRecommendOpen} 
        onClose={() => setIsRecommendOpen(false)} 
      />

    </div>
  );
}

export default App;