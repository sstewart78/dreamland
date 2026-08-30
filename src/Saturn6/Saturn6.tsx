import { useState, useEffect } from 'react'
import { 
    Database,
    ChevronRight,
    Droplets,
    ExternalLink,
    HardHat,
    Info,
    Layers,
    Lock,
    Microscope,
    Radio,
    Shield,
    Users,
    Wind,
    Zap
 } from 'lucide-react';

const SATURN_6_LEVELS = [
  { 
    id: 1, 
    name: "Topside", 
    depth: "0m", 
    icon: <Shield className="w-5 h-5" />, 
    description: "Surface entry point and reinforced blast doors. Camouflaged within the Alaskan tundra.",
    details: "Equipped with automated sentry systems, meteorological sensors, and the primary helicopter landing pad for GRID personnel.",
    status: "Active - Monitoring Surface Conditions"
  },
  { 
    id: 2, 
    name: "Administrative and LabComm", 
    depth: "750m", 
    icon: <HardHat className="w-5 h-5" />, 
    description: "Command level housing LabComm and offices of political and military officials.",
    details: "Level 1 serves as the administrative nexus of Saturn-6, " 
      + "home to the facility’s sprawling command hub known simply as LabComm. "
      + "From here, Director Eilynn Reynolds coordinates all scientific research conducted at the facility.",
    status: "Operational"
  },
  { 
    id: 3, 
    name: "Medical", 
    depth: "900m", 
    icon: <Lock className="w-5 h-5" />, 
    description: "The level housing the Medical Division.",
    details: "The Medical Division manages the infirmary, general medical facilities, and medical research labs.",
    status: "Capacity: 17%"
  },
  { 
    id: 4, 
    name: "Research and Technology - DARTI",
    depth: "1050m",
    icon: <Users className="w-5 h-5" />, 
    description: "Division of Applied Research and Technology.",
    details: "The scientific heart of Saturn-6 where Dr. Turner and his colleaugues conduct their critical research, finding solutions to mitigate the devastation of a nuclear war.",
    status: "Optimal"
  },
  { 
    id: 5, 
    name: "Emergency Shelters !!Restricted!!", 
    depth: "1220m", 
    icon: <Wind className="w-5 h-5" />, 
    description: "High-level government officials and Chapman's private bunker.",
    details: "Restricted access. Features luxury amenities, private kitchens, and direct secure lines to Level 11.",
    status: "Optimal"
  },
  { 
    id: 6, 
    name: "Barracks", 
    depth: "1450m", 
    icon: <Microscope className="w-5 h-5" />, 
    description: "The Space Force base.",
    details: "Bunkhouses, ameneties, and supply depots for the military personnel.",
    status: "Optimal"
  },
  { 
    id: 7, 
    name: "Food Production and Storage", 
    depth: "1600m", 
    icon: <Users className="w-5 h-5" />, 
    description: "Sustainable food production.",
    details: "Critical for long-term survival. Entofarms, hydroponics, sunless agriculture.",
    status: "Optimal"
  },
  { 
    id: 8, 
    name: "Health and Recreation", 
    depth: "1750m", 
    icon: <Droplets className="w-5 h-5" />, 
    description: "",
    details: "",
    status: "Optimal"
  },
  { 
    id: 9, 
    name: "Power and Engineering - NetCore",
    depth: "1950m", 
    icon: <Zap className="w-5 h-5" />, 
    description: "Central reactor and NetCore.",
    details: "Engineering and Tech Division manages central reactor, NetCore, and data mainframe for the Saturn-6 AI.",
    status: "Optimal"
  },
  { 
    id: 10, 
    name: "Environment and Life Support", 
    depth: "2100m", 
    icon: <Database className="w-5 h-5" />, 
    description: "",
    details: "Maintains a pressurized environment. Advanced air filtration, CO2 scrubbers, water purification, and temperature regulation for all lower levels.Air filtration and oxygen generation systems.",
    status: "Optimal"
  },
  { 
    id: 11, 
    name: "Deep Storage Archives", 
    depth: "2300m", 
    icon: <Database className="w-5 h-5" />, 
    description: "Classified data storage and the AI-powered mainframe.",
    details: "Location of the 'Elena Tome' digital backups. Deepest point of the facility, adjacent to the Void Trap.",
    status: "Optimal"
  }
];

type HomeProps = {  
    getGlassStyle: (opacity: number) => React.CSSProperties;
    bgOpacity: number;
    isMobileAsideOpen: boolean;
    setIsMobileAsideOpen: (isOpen: boolean) => void;
};

export function Saturn6({ getGlassStyle, bgOpacity, isMobileAsideOpen, setIsMobileAsideOpen}: HomeProps) {
    const [selectedLevel, setSelectedLevel] = useState(SATURN_6_LEVELS[0]);
    const [isHologramActive, setIsHologramActive] = useState(false);
    const [linkSpeed, setLinkSpeed] = useState('8.4');


    useEffect(() => {
        const timer = setTimeout(() => setIsHologramActive(true), 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let timeoutId: number | undefined;

        const cycleTelemetry = () => {
            // Flucuate link speed between ~7.8 nd 9.6 GB/s
            const jitter = (7.8 + Math.random() * 1.8).toFixed(1);
            setLinkSpeed(jitter);

            // Schedule next random update between 1000ms and 5000ms
            const randomDelay = Math.floor(Math.random() * 2000) + 1000;
            timeoutId = setTimeout(cycleTelemetry, randomDelay);
        }

        timeoutId = setTimeout(cycleTelemetry, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className='flex flex-col md:flex-row h-full w-full overflow-hidden'>
            <div
                className={`md:hidden fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileAsideOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMobileAsideOpen(false)}
            />

            <aside
                className={`fixed left-0 z-40 w-[88vw] max-w-[320px] border-r border-cyan-500/20 overflow-y-auto custom-scrollbar transition-transform duration-500 ease-out md:static md:inset-y-0 md:w-96 md:translate-x-0 ${
                    isMobileAsideOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                } md:top-0 md:bottom-0 ${isMobileAsideOpen ? 'top-22 bottom-0' : 'top-22 bottom-0'}`}
                style={getGlassStyle(Math.max(0.04, bgOpacity - 0.1))}
            >
                <div className='p-4 border-b border-cyan-500/20 bg-black/20 flex items-center justify-between'>
                    <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2'>
                        <Layers className='w-4 h-4' /> Facility Schematic
                    </h2>
                    <button
                        type="button"
                        onClick={() => setIsMobileAsideOpen(false)}
                        className="md:hidden rounded border border-cyan-500/40 bg-black/20 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-cyan-300"
                    >
                        Close
                    </button>
                </div>
                <div className='flex flex-col'>
                    {SATURN_6_LEVELS.map((level) => (
                        <button
                            key={level.id}
                            onClick={() => {
                                setSelectedLevel(level);
                                setIsMobileAsideOpen(false);
                            }}
                            className={`flex items-center gap-4 p-4 transition-all border-l-2 hover:bg-cyan-500/10 group ${
                                selectedLevel.id === level.id
                                    ? 'border-cyan-400 bg-cyan-950/40 text-cyan-100'
                                    : 'border-transparent text-cyan-300/70'
                            }`}
                        >
                            <span className="text-[10px] font-mono opacity-60 w-6">L{level.id.toString().padStart(2, '0')}</span>
                            <div className={`p-2 rounded border transition-all ${
                                selectedLevel.id === level.id ? 'bg-cyan-500/30 border-cyan-400 text-cyan-200 shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'bg-black/30 border-cyan-900/40 group-hover:border-cyan-700'
                            }`}>
                                {level.icon}
                            </div>
                            <div className="flex flex-col items-start text-left flex-1">
                                <span className={`text-sm font-semibold ${selectedLevel.id === level.id ? 'text-white' : ''}`}>
                                    {level.name}
                                </span>
                                <span className="text-[10px] uppercase opacity-70 text-cyan-400">{level.depth} DEPTH</span>
                            </div>
                            {selectedLevel.id === level.id && (
                                <ChevronRight className='w-4 h-4 text-cyan-400 animate-bounce-x' />
                            )}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content Viewport*/}
            <section className='flex-1 relative p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 overflow-y-auto'>
                <div className='relative z-10 flex flex-col lg:flex-row gap-6 md:gap-8 items-start'>

                    {/* Holographic Shaft View */}
                    <div className='w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6'>
                        <div
                            className="relative aspect-video rounded-xl border border-cyan-500/30 overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] transition-all duration-500"
                            style={getGlassStyle(Math.max(0.04, bgOpacity - 0.1))}
                        >
                            <div className='absolute inset-0 p-4 sm:p-8 flex items-center justify-center'>
                                <div className={`relative transition-transform duration-1000 ease-out ${isHologramActive ? 'scale-90 sm:scale-100' : 'scale-75 opacity-0'}`}>
                                    <div className="w-20 sm:w-24 h-56 sm:h-64 bg-cyan-950/20 border-x border-cyan-400/50 relative shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                                        {SATURN_6_LEVELS.map((l) => (
                                            <div
                                                key={l.id}
                                                style={{ top: `${(l.id -1) * 9}%` }}
                                                className={`absolute w-full h-1 border-b border-cyan-400/60 transition-all duration-300 ${
                                                    selectedLevel.id === l.id ? 'bg-cyan-400 shadow-[0_0_15px_cyan] z-20 scale-x-125' : 'opacity-40'
                                                }`}
                                            />
                                        ))}
                                        <div className="absolute w-full h-4 bg-linear-to-b from-transparent via-cyan-400/30 to-transparent top-0 animate-scan pointer-events-none" />
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 sm:w-48 h-40 sm:h-48 border border-cyan-500/30 rounded-full overflow-hidden">
                                        <div className="absolute left-1/2 top-1/2 h-px w-[52%] -translate-y-1/2 origin-left animate-radar-sweep">
                                            <div className="h-full w-full bg-linear-to-r from-transparent via-cyan-300/90 to-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 sm:w-64 h-52 sm:h-64 border border-cyan-500/20 rounded-full animate-reverse-spin" />
                                </div>
                            </div>

                            <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex gap-2">
                                <div className="bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-cyan-500/40 flex items-center gap-1.5 sm:gap-2">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-tight text-cyan-300">PATI Holographic Shaft View</span>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <div
                                className="p-4 rounded-lg border border-cyan-500/30 transition-all duration-500"
                                style={getGlassStyle(bgOpacity)}
                            >
                                <div className="flex items-center gap-2 mb-2 text-cyan-400 uppercase text-[10px] font-bold">
                                    <Radio className='w-3.5 h-3.5' />Core Link Speed
                                </div>
                                <div className="text-xl font-mono text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">{linkSpeed} GB/s</div>
                            </div>
                            <div
                                className="p-4 rounded-lg border border-cyan-500/30 transition-all duration-500"
                                style={getGlassStyle(bgOpacity)}
                            >
                                <div className="flex items-center gap-2 mb-2 text-cyan-400 uppercase text-[10px] font-bold">
                                    <Info className="w-3.5 h-3.5" /> Void Trap Stability
                                </div>
                                <div className="text-xl font-mono text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)] animate-status-pulse">
                                    NOMINAL
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <div
                            className="border border-cyan-500/30 rounded-xl overflow-hidden shadow-2xl transition-all duration-500"
                            style={getGlassStyle(bgOpacity)}
                        >
                            <div className="bg-cyan-500/15 p-4 sm:p-6 border-b border-cyan-500/30">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <span className="text-[10px] sm:text-xs font-mono text-cyan-300 block mb-1 uppercase tracking-widest">
                                            Sector Profile // Level {selectedLevel.id}
                                        </span>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                                            {selectedLevel.name}
                                        </h3>
                                    </div>
                                    <div className="p-2.5 sm:p-3 bg-black/60 rounded-lg border border-cyan-400/40 text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.2)]">
                                        {selectedLevel.icon}
                                    </div>
                                </div>
                            </div>

                            <div className='p-4 sm:p-6 space-y-4 sm:space-y-6'>
                                <div className='space-y-1.5 sm:space-y-2'>
                                    <label className="text-[9px] sm:text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Description</label>
                                    <p className="text-cyan-100 leading-relaxed text-xs sm:text-sm italic">"{selectedLevel.description}"</p>
                                </div>

                                <div className='space-y-1.5 sm:space-y-2'>
                                    <label className="text-[9px] sm:text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">Technical Specifications</label>
                                    <div className="bg-black/50 p-3 sm:p-4 rounded-lg border border-cyan-900/50 text-xs sm:text-sm font-mono text-cyan-200" >
                                        {selectedLevel.details}
                                    </div>
                                </div>

                                <div className='flex items-center justify-between pt-3 sm:pt-4 border-t border-cyan-500/20'>
                                    <span className="text-[11px] sm:text-xs font-mono text-cyan-300 font-semibold">{selectedLevel.status}</span>
                                    <button className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-cyan-500 hover:bg-cyan-400 text-black text-[11px] sm:text-xs font-bold rounded uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all">
                                        Access Logs <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                                                
        </div>
        
    );
}

export default Saturn6;