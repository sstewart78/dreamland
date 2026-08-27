import React from "react";

export function Background() {

    return (
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
    );
}

export default Background;