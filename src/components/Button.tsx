interface ButtonProps {
    label: string,
    onClick: () => void;
    variant?: 'primary' | 'secondary' | 'danger'; // le style du bouton
    icon?: React.ReactNode; 
}

// React.FC : cela signifie sue ce composant est un composant fonctionnel React
export const Button: React.FC<ButtonProps> = ({label, onClick, variant = 'primary', icon}) => {
    const baseStyle = "px-4 py-2 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer";

    const variants = {
        primary: "bg-sky-500 hover:bg-sky-400 text-white shadow-sky-500/20",
        secondary: "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700",
        danger: "bg-rose-500 hover:bg-rose-400 text-white shadow-rose-500/20",
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`} >
            {icon && <span>{icon}</span>}
            {label}
        </button>
    );
};