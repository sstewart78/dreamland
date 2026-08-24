import { useState, useEffect } from 'react'
import {
  Shield,
  Database,
  Microscope,
  HardHat,
  Users,
  Lock,
  Wind,
  Zap,
  Droplets,
  ChevronRight,
  Info,
  Radio,
  ExternalLink,
  BookOpen,
  MapPin,
  Terminal,
  Activity,
  Layers,
  Eye,
  Image as ImageIcon,
  AlertTriangle
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
    name: "LabComm and Administrative", 
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
    name: "Research and Technology — DARTI", 
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
    name: "Power and Systems Control", 
    depth: "1950m", 
    icon: <Zap className="w-5 h-5" />, 
    description: "Central reactor and NetCore.",
    details: "Engineering and IT division manages central reactor, NetCore, and data mainframe for the Saturn-6 AI.",
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

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bgOpacity, setBgOpacity] = useState(0.25);
  const [selectedLevel, setSelectedLevel] = useState(SATURN_6_LEVELS[0]);

  const  getGlassStyle = (opacityVal: number | undefined) => {
    const val = opacityVal !== undefined ? opacityVal : bgOpacity;
    const clampedOpacity = Math.max(0.05, val);
    const blurAmount = val <= 0.3 ? '2px' : val <= 0.6 ? '6px' : '16px';
    return {
      backgroundColor: `rgba(8, 12, 18, ${clampedOpacity})`,
      backdropFilter: `blur(${blurAmount})`,
      WebkitBackdropFilter: `blur(${blurAmount})`,
    };
  };

  return (
    <>
      <section className="relative flex flex-col h-screen text-cyan-50 font-sans overflow-hidden select-none bg-[#030500]">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1400 900" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2c1a08" />
                <stop offset="40%" stopColor="#1a2e3b" />
                <stop offset="100%" stopColor="#04070c" />
              </linearGradient>
              <radialGradient id="nukeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff7700" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#ff3300" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="paradiseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#064e3b" />
                <stop offset="50%" stopColor="#0284c7" />
                <stop offset="100%" stopColor="#02131d" />
              </linearGradient>
              <radialGradient id="paradiseGlow" cx="30%" cy="50%" r="40%">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <radialGradient id="paradiseHaze" cx="30%" cy="50%" r="80%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              <linearGradient id="wastelandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#451a03" />
                <stop offset="50%" stopColor="#78350f" />
                <stop offset="100%" stopColor="#0f0702" />
              </linearGradient>
              <radialGradient id="wasteGlow" cx="70%" cy="40%" r="40%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>

            {/* Sky Background */}
            <rect width="100%" height="100%" fill="url(#skyGrad)" />

            {/* Central Mushroom Cloud & Shockwave */}
            <circle cx="700" cy="220" r="300" fill="url(#nukeGlow)" />
            <path d="M 620 380 Q 700 120 780 380 Q 880 180 700 80 Q 520 180 620 380 Z" fill="#ea580c" opacity="0.8" />
            <ellipse cx="700" cy="180" rx="220" ry="80" fill="#f97316" opacity="0.85" />
            <ellipse cx="700" cy="160" rx="160" ry="50" fill="#fef08a" opacity="0.9" />

            {/* Left Side: Paradise & High-Tech Spires */}
            <path d="M 0 350 Q 300 400 550 500 L 0 900 Z" fill="url(#paradiseGrad)" />
            <path d="M 120 500 L 140 350 L 160 500 Z" fill="#0ea5e9" opacity="0.65" />
            <path d="M 200 550 L 220 420 L 240 550 Z" fill="#38bdf8" opacity="0.55" />
            <circle cx="200" cy="450" r="250" fill="url(#paradiseGlow)" />
            {/* Emerald Waterfalls & City */}
            <polygon points="120,420 140,280 160,420" fill="#38bdf8" opacity="0.65" />
            <polygon points="180,450 200,220 220,450" fill="#0ea5e9" opacity="0.55" />
            <polygon points="240,430 260,300 280,430" fill="#38bdf8" opacity="0.55" />
            <path d="M 50 480 Q 180 460 300 520 L 300 900 L 0 900 Z" fill="#047857" opacity="0.6" />
            {/* Rainbow Arc */}
            <path d="M 50 420 A 250 250 0 0 1 450 420" stroke="#38bdf8" strokeWidth="8" fill="none" opacity="0.4" />
            <path d="M 60 420 A 240 240 0 0 1 440 420" stroke="#4ade80" strokeWidth="6" fill="none" opacity="0.4" />
            {/* Boundary */ }
            <path d="M 0 350 Q 300 400 550 500" stroke="#7dd3fc" strokeWidth="3" opacity="0.4" />
            {/* Paradise Haze */ }
            <rect width="100%" height="100%" fill="url(#paradiseHaze)" />
            {/* Right Side: Wasteland & Industrial Chimneys */}
            <path d="M 1400 350 Q 1100 400 850 500 L 1400 900 Z" fill="url(#wastelandGrad)" />
            {/* Factory Smoke Stacks */}
            <rect x="1150" y="320" width="30" height="180" fill="#1c1917" />
            <rect x="1220" y="280" width="40" height="220" fill="#27272a" />
            <rect x="1300" y="340" width="35" height="160" fill="#1c1917" />
             {/* Smoke Plumes */}
            <circle cx="1165" cy="280" r="35" fill="#57534e" opacity="0.6" />
            <circle cx="1240" cy="230" r="50" fill="#44403c" opacity="0.7" />
            <circle cx="1317" cy="300" r="40" fill="#57534e" opacity="0.6" />
            <path
              d="M 1165 300 Q 1180 250 1160 200 Q 1180 160 1165 120"
              fill="none"
              stroke="rgba(80,80,80,0.4)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 1240 270 Q 1255 220 1235 170 Q 1255 130 1240 90"
              fill="none"
              stroke="rgba(80,80,80,0.4)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            <path
              d="M 1315 320 Q 1330 270 1310 220 Q 1330 180 1315 140"
              fill="none"
              stroke="rgba(80,80,80,0.4)"
              strokeWidth="20"
              strokeLinecap="round"
            />
            {/* Toxic Ponds */}
            <ellipse cx="1050" cy="650" rx="120" ry="40" fill="#991b1b" opacity="0.8" />
            <ellipse cx="1200" cy="780" rx="90" ry="30" fill="#7f1d1d" opacity="0.9" />
            {/* Waste Glow */}
            <circle cx="1200" cy="350" r="250" fill="url(#wasteGlow)" />
            {/* Jagged Terrain */}
            <path
              d="M 900 520 Q 1100 580 1400 540 L 1400 900 L 850 900 Z"
              fill="#3f1d0b"
              opacity="0.5"
            />
            {/* Subtle Haze */}
            <rect width="100%" height="100%" fill="rgba(0,0,0,0.15)" />
            {/* Center Winding Highway */}
            <path d="M 700 400 Q 660 520 740 620 T 700 900" stroke="#1e293b" strokeWidth="120" fill="none" />
            <path d="M 700 400 Q 660 520 740 620 T 700 900" stroke="#facc15" strokeWidth="6" strokeDasharray="25,20" fill="none" />
            {/* Silhouetted Patrol Drones */}
            <g fill="#0ea5e9" opacity="0.8">
              <path d="M 320 180 L 340 185 L 320 190 L 300 185 Z" />
              <circle cx="320" cy="185" r="3" fill="#38bdf8" />
              <path d="M 1050 160 L 1070 165 L 1050 170 L 1030 165 Z" />
              <circle cx="1050" cy="165" r="3" fill="#ef4444" />
            </g>
            {/* Foreground Sentries */}
            <path d="M 520 820 L 535 770 L 550 820 Z" fill="#0f172a" />
            <circle cx="535" cy="762" r="7" fill="#38bdf8" />
            <path d="M 850 820 L 865 770 L 880 820 Z" fill="#0f172a" />
            <circle cx="865" cy="762" r="7" fill="#ef4444" />
            {/* PATI Grid Overlay */}
            <g stroke="#06b6d4" strokeWidth="0.5" opacity="0.25">
              <line x1="0" y1="150" x2="1400" y2="150" />
              <line x1="0" y1="450" x2="1400" y2="450" />
              <line x1="0" y1="750" x2="1400" y2="750" />
              <line x1="350" y1="0" x2="350" y2="900" />
              <line x1="1050" y1="0" x2="1050" y2="900" />
            </g>
          </svg>
          <div className='absolute inset-0 bg-linear-to-t from-[#030508] via-transparent to-black/60 transition-opacity duration-500'
               style={{ opacity: bgOpacity <= 0.3 ? 0.1 : bgOpacity <= 0.6 ? 0.4 : 0.7 }} 
          />
        </div>
        <header className="relative z-50 flex items-center justify-between px-6 py-3 border-b border-cyan-500/30 bg-[#0a0d12]/80 backdrop-blur-md shadow-lg">
          {/* Tab Navigation */}
          <nav className='flex items-center gap-2 bg-black/60 p-1 rounded-lg border border-cyan-500/30 backdrop-blur-md'>
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'home'
                ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-950/40'
            }`}
            >
              <BookOpen className='w-3.5 h-3.5' /> Overview
            </button>
            <button 
              onClick={() => setActiveTab('saturn6')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all ${
              activeTab === 'saturn6'
                ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400/70 shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                : 'text-cyan-400/70 hover:text-cyan-300 hover:bg-cyan-950/40'
            }`}
            >
              <MapPin className='w-3.5 h-3.5' /> Saturn-6 Map
            </button>
          </nav>

          {/* Glass HUD Toggle */}
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
        </header>
        {}
        <main className='relative z-10 flex-1 overflow-hidden'>
          {/* Scanline Overlay */}
          <div className="absolute inset-0 pointer-events-none z-30 opacity-15 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-size-[100%_4px]" />

          {/* TAB 1: HOME - COMING SOON */}
          {activeTab === 'home' && (
            <div className='relative z-20 flex flex-col items-center justify-center p-6'>
              <div 
                className="relative z-20 flex flex-col items-center text-center max-w-3xl px-8 py-12 rounded-2xl border border-cyan-500/40 shadow-[0_0_60px_rgba(0,0,0,0.9)] transition-all duration-500"
                style={getGlassStyle(bgOpacity)}
              >
                <div className='inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text=[10px] font-mono uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(34,211,238,0,2)]'>
                  <Terminal className='w-3.5 h-3.5' /> ARCHIVE DATA TRANSMISSION
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] uppercase">
                  The Path to Dreamland
                </h1>

                <p className="text-xl md:text-2xl font-mono text-cyan-300 tracking-widest mt-2 uppercase border-b border-cyan-500/30 pb-4 w-full drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
                  Vol. I: Trials
                </p>

                <div className="mt-8 flex flex-col items-center gap-4">
                  <span className="px-8 py-2.5 rounded-lg bg-cyan-500/25 border border-cyan-400/60 text-cyan-100 font-mono text-sm tracking-widest uppercase animate-pulse shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                    Coming Soon
                  </span>

                  <button 
                    onClick={() => setActiveTab('saturn6')}
                    className="mt-4 flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-200 transition-colors uppercase tracking-widest bg-black/40 px-4 py-2 rounded-md border border-cyan-900/60 hover:border-cyan-400"
                  >
                    Access Facility Records <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {}
          {activeTab === 'saturn6' && (
            <div className='flex h-full w-full overflow-hidden'>
              {/* Transluscent Sidebar */}
              <aside
                className="w-80 border-r border-cyan-500/20 overflow-y-auto custom-scrollbar transition-all duration-500"
                style={getGlassStyle(Math.max(0.04, bgOpacity - 0.1))}
              >
                <div className='p-4 border-b border-cyan-500/20 bg-black/20'>
                  <h2 className='text-xs font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-2'>
                    <Layers className='w-4 h-4' /> Facility Schematic
                  </h2>
                </div>
                <div className='flex flex-col'>
                  {SATURN_6_LEVELS.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level)}
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
                        <span className={`text-sm font-semibold truncate ${selectedLevel.id === level.id ? 'text-white' : ''}`}>
                          {level.name}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          )}
        </main>
        
        {/* Animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan { from { transform: translateY(0); } to { transform: translateY(256px); } }
          @keyfranes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
          @keyfranes reverse-spin { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }
          .animate-scan { animation: scan 3s linear infinite; }
          .animate-spin-slow { animation: spin-slow 20s linear infinite; }
          .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
          .custom-scrollbar::-webkit-scrollbar { width: 4px }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(10, 12, 14, 0.5); }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #0891b2; border-radius: 4px; }
        `}} />
      </section>

    </>
  )
}

export default App
