import { Terminal, ChevronRight } from 'lucide-react';

type HomeProps = {
  getGlassStyle: (opacity: number) => React.CSSProperties;
  bgOpacity: number;
  setActiveTab: (tab: string) => void;
};

export function Home({ getGlassStyle, bgOpacity, setActiveTab }: HomeProps) {
    return (
        <div className='relative z-20 flex flex-col items-center justify-center p-6'>
              <div 
                className="relative z-20 flex flex-col items-center text-center max-w-3xl px-8 py-12 rounded-2xl border border-cyan-500/40 shadow-[0_0_60px_rgba(0,0,0,0.9)] transition-all duration-500"
                style={getGlassStyle(bgOpacity)}
              >
                <div className='inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text=[10px] font-mono uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(34,211,238,0,2)]'>
                  <Terminal className='w-3.5 h-3.5' /> ARCHIVE DATA TRANSMISSION
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] uppercase">
                  The Path to Dreamland
                </h1>

                <p className="text-xl md:text-2xl font-mono text-cyan-300 tracking-widest mt-2 uppercase border-b border-cyan-500/30 pb-4 w-full drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                  Vol. I: Trials
                </p>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <a onClick={() => setActiveTab('preview')} className="px-8 py-2.5 rounded-lg bg-cyan-500/25 border border-cyan-400/60 text-cyan-100 font-mono text-sm tracking-widest uppercase animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    Book Preview
                  </a>

                  <button 
                    onClick={() => setActiveTab('saturn6')}
                    className="mt-4 flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-200 transition-colors uppercase tracking-widest bg-black/40 px-4 py-2 rounded-md border border-cyan-900/60 hover:border-cyan-400"
                  >
                    Access Facility Records <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
    );
}

export default Home;