import {BarChart3, Mail} from 'lucide-react';
interface NavBarProps {
    onGoHome: () => void;
    onOpenRecommend: () => void;
    title?: string;
}

export const Navbar: React.FC<NavBarProps> =({ onGoHome, onOpenRecommend, title}) => {
    return (
        <header className="w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
            <div
                onClick= {onGoHome}
                className="flex items-center gap-3 cursor-pointer group"
            >
                <div  className="bg-sky-500/10 p-2.5 rounded-xl border border-sky-500/20 group-hover:bg-sky-500/20 transition-all">
                    <BarChart3 className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                    <h1 className="text-lg font-bold text-slate-100 tracking-tight">AlgoVisualizer</h1>
                    <p className="text-xs text-slate-400">Dynamic Sorting & Algorithms</p>
                </div>
            </div>


            {title && (
                <div className="hidden md:block text-sm font-semibold text-slate-300 bg-slate-800/50 px-4 py-1.5 rounded-full border border-slate-700/50">
                Algorithme : <span className="text-sky-400">{title}</span>
                </div>
            )}

            <button
        onClick={onOpenRecommend}
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium px-4 py-2 rounded-xl border border-slate-700 transition-all shadow-sm hover:border-slate-600 cursor-pointer"
        >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>Suggérer un algo</span>
        </button>

        </header>
    );
};