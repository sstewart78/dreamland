import {Eye} from 'lucide-react';


type HUDToggleProps = {
  bgOpacity: number;
  setBgOpacity: (opacity: number) => void;
};
export function HUDToggle({ bgOpacity, setBgOpacity }: HUDToggleProps) {
    return(
        <div className='flex items-center gap-3 text-[10ox] font-mono'>
            <div className='flex items-center gap-2 px-3 py-1 rounded-lg border border-cyan-400/50 bg-cyan-950/80 backdrop-blur shadow-[0_0_12px_rgba(34,211,238,0.25)]'>
              <Eye className='w-3.5 h-3.5 text-cyan-300 animate-pulse' />
              <span className='text-cyan-300 font-bold uppercase hidden md:inline'>HUD Glass:</span>
              <div className='flex items-center gap-1 bg-black/60 p-0.5 rounded border border-cyan-500/30'>
                <button 
                  onClick={() => setBgOpacity(0.08)} 
                  className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all ${bgOpacity === 0.08 ? 'bg-cyan-400 text-black shadow-[0_0_8px_cyan]' : 'text-cyan-400/70 hover:text-cyan-200'}`}
                >
                  Clear
                </button>
                <button 
                  onClick={() => setBgOpacity(0.4)}
                  className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all ${bgOpacity === 0.4 ? 'bg-cyan-400 text-black shadow-[0_0_8px_cyan]' : 'text-cyan-400/70 hover:text-cyan-200'}`}
                >
                  Glass
                </button>
                <button 
                  onClick={() => setBgOpacity(0.85)}
                  className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all ${bgOpacity === 0.85 ? 'bg-cyan-400 text-black shadow-[0_0_8px_cyan]' : 'text-cyan-400/70 hover:text-cyan-200'}`}
                >
                  Solid
                </button>
              </div>
            </div>
          </div>
    );
}

export default HUDToggle;