import Scanline from '../Scanline/Scanline';
import Home from '../Home/Home';
import Saturn6 from '../Saturn6/Saturn6';
import { Bookmark, FileText, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

type MainContentProps = {
    bgOpacity: number;
    setActiveTab: (tab: string) => void;
    activeTab: string;
    isMobileAsideOpen: boolean;
    setIsMobileAsideOpen: (isOpen: boolean) => void;
    subscribed: boolean;
    setSubscribed: (subscribed: boolean) => void;
    emailInput: string;
    setEmailInput: (email: string) => void;
};

export function MainContent({
    bgOpacity,
    setActiveTab,
    activeTab,
    isMobileAsideOpen,
    setIsMobileAsideOpen,
    subscribed,
    setSubscribed,
    emailInput,
    setEmailInput
    }: MainContentProps) {
        const getGlassStyle = (opacityVal: number | undefined) => {
        const val = opacityVal !== undefined ? opacityVal : bgOpacity;
        const clampedOpacity = Math.max(0.05, val);
        const blurAmount = val <= 0.3 ? '2px' : val <= 0.6 ? '6px' : '16px';
        return {
            backgroundColor: `rgba(8, 12, 18, ${clampedOpacity})`,
            backdropFilter: `blur(${blurAmount})`,
            WebkitBackdropFilter: `blur(${blurAmount})`,
        };
    };

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (emailInput.trim()) {
            setSubscribed(true);
        }
    };

    return (
        <main className='relative z-10 flex-1 overflow-hidden'>
            <Scanline />
            {activeTab === 'home' && (
                <Home 
                    getGlassStyle={getGlassStyle} 
                    bgOpacity={bgOpacity} 
                    setActiveTab={setActiveTab}
                />
            )}
            {activeTab === 'saturn6' && (
                <Saturn6 
                    getGlassStyle={getGlassStyle} 
                    bgOpacity={bgOpacity}
                    isMobileAsideOpen={isMobileAsideOpen}
                    setIsMobileAsideOpen={setIsMobileAsideOpen}
                />
            )}

            {activeTab === 'preview' && (
                <div className="relative w-full h-full p-4 sm:p-6 md:p-8 overflow-y-auto">
                    <div className="max-w-5xl mx-auto flex flex-col gap-6">
                        {/* Header Banner */}
                        <div
                            className="rounded-2xl border border-cyan-500/30 p-6 sm:p-8 transition-all duration-500 relative overflow-hidden"
                            style={getGlassStyle(bgOpacity)}
                        >
                            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-cyan-500/20">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[10px] font-mono uppercase tracking-widest mb-2">
                                    <Bookmark className="w-3.5 h-3.5" /> NOVEL ARCHIVE PROFILE
                                    </div>
                                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide uppercase">
                                    The Path to Dreamland
                                    </h2>
                                    <p className="text-lg font-mono text-cyan-400 tracking-wider mt-0.5">
                                    Vol. I: Trials
                                    </p>
                                </div>

                                <div className="flex flex-col items-start md:items-end gap-1">
                                    <span className="px-4 py-1.5 rounded-md bg-amber-500/20 border border-amber-400/50 text-amber-300 font-mono text-xs uppercase tracking-widest animate-pulse">
                                    Status: Publication Pending
                                    </span>
                                    <span className="text-[10px] font-mono text-cyan-600">GRID TRANSMISSION: 2084 EPOCH</span>
                                </div>
                                </div>

                                {/* Synopsis Grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-6 relative z-10">

                                {/* Main Overview / Lore */}
                                <div className="lg:col-span-2 space-y-4">
                                    <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                                        <FileText className="w-4 h-4" /> Narrative Briefing
                                    </h3>

                                    <p className="text-sm leading-relaxed text-cyan-100/90 italic border-l-2 border-cyan-500/50 pl-4 py-1">
                                        "As the world is plunged into a devastating nuclear war, Saturn-6—a state-of-the-art scientific research bunker buried deep beneath the Alaskan permafrost—becomes the fragile crucible for what remains of civilization. Survival alone is not enough... what matters is what comes next."
                                    </p>

                                    <p className="text-xs leading-relaxed text-cyan-200/80 font-mono">
                                        Follow microbiologist <span className="text-cyan-300 font-bold">Dr. Jonathan Turner</span> as he battles claustrophobia and hidden agendas within DARTI's Level 6 containment labs, while billionaire financier <span className="text-cyan-300 font-bold">Charles Chapman</span> tightens his authoritarian grip from the Gilded Sector above the mysterious Void Trap.
                                    </p>

                                    {/* Excerpt Chips */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    <div className="bg-black/40 p-3 rounded-lg border border-cyan-900/60">
                                        <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">PROLOGUE TRANSMISSION</span>
                                        <p className="text-[11px] text-cyan-300/80 font-mono">
                                            "Elena's gray tome contains the truth of the final days... before the Triple-Headed Fire Dragon extinguished all that was."
                                        </p>
                                    </div>

                                    <div className="bg-black/40 p-3 rounded-lg border border-cyan-900/60">
                                        <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">CHARON-9 INTERCEPT</span>
                                        <p className="text-[11px] text-cyan-300/80 font-mono">
                                            "Agent Morozov slips through the Siberian blizzard. The GRID's 27 global nodes hold secrets beyond survival."
                                        </p>
                                    </div>
                                    </div>
                                </div>

                                {/* Dispatch / Notification Box */}
                                <div className="bg-black/40 p-5 rounded-xl border border-cyan-500/20 flex flex-col justify-between gap-4">
                                    <div>
                                        <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-2 mb-2">
                                            <Calendar className="w-4 h-4 text-cyan-400" /> Dispatch Alerts
                                        </h4>
                                        <p className="text-[11px] text-cyan-400/80 font-mono leading-relaxed mb-4">
                                            Register your frequency to receive transmission notices upon the release of Vol. I: Trials.
                                        </p>
                                        {subscribed ? (
                                            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-400/50 flex items-center gap-2 text-emerald-300 text-xs font-mono">
                                                <CheckCircle2 className="w-4 h-4 shrink-0" />
                                                <span>Frequency Registered. Stand by for launch signal.</span>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubscribe} className="space-y-2">
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="comm.link@domain.com"
                                                    value={emailInput}
                                                    onChange={(e) => setEmailInput(e.target.value)}
                                                    className="w-full bg-cyan-950/30 border border-cyan-500/40 rounded-md px-3 py-2 text-xs font-mono text-cyan-100 placeholder:text-cyan-700 outline-none focus:border-cyan-400"
                                                />
                                                <button
                                                    type="submit"
                                                    className="w-full py-2 rounded-md bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                                                >
                                                    Signal Registration
                                                </button>
                                            </form>
                                        )}
                                    </div>

                                    <div className="pt-3 border-t border-cyan-900/50 flex flex-col gap-2">
                                        <button
                                            onClick={() => setActiveTab('saturn6')}
                                            className="w-full flex items-center justify-between text-xs font-mono text-cyan-400 hover:text-cyan-200 transition-colors uppercase p-2 rounded bg-cyan-950/20 border border-cyan-900/40"
                                        >
                                            <span>Explore Saturn-6 Schematic</span>
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            )}
        </main>
    );

}

export default MainContent;