
type ButtonProps = {
    activeTab: string;
    onTabChange: (tab: string) => void;
    page: string;
    icon: React.ReactNode;
    text: string;
};

export function Button({ activeTab, onTabChange, page, icon, text }: ButtonProps) {
    return (
        <button 
            onClick={() => onTabChange(page)}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
            activeTab === page
            ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
            : 'text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-950/40'
            }`}
        >
            {icon}{text}
        </button>
    )
}

export default Button;
