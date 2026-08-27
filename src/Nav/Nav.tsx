import {
  BookOpen,
  MapPin,
} from 'lucide-react';

type NavProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export function Nav({ activeTab, onTabChange }: NavProps) {
    return (
        <nav className='flex items-center gap-2 bg-black/60 p-1 rounded-lg border border-cyan-500/30 backdrop-blur-md'>
            <button 
              onClick={() => onTabChange('home')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'home'
                ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-950/40'
            }`}
            >
              <BookOpen className='w-3.5 h-3.5' /> Overview
            </button>
            <button 
              onClick={() => onTabChange('saturn6')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'saturn6'
                ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-950/40'
            }`}
            >
              <MapPin className='w-3.5 h-3.5' /> Saturn-6 Map
            </button>
          </nav>
    );
}

export default Nav;