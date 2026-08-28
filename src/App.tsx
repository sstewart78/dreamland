import { useState, useEffect } from 'react'
import Background from './Background/Background';
import Vignette from './Vignette/Vignette';
import Nav from './Nav/Nav';
import HUDToggle from './HUDToggle/HUDToggle';
import Scanline from './Scanline/Scanline';
import Home from './Home/Home';
import Saturn6 from './Saturn6/Saturn6';

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bgOpacity, setBgOpacity] = useState(0.25);

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
          <Background />
          {/* Light Environmental Vignette Overlay */}
          <Vignette bgOpacity={bgOpacity} />
        </div>

        {}
        <header className="relative z-50 flex items-center justify-between px-6 py-3 border-b border-cyan-500/30 bg-[#0a0d12]/80 backdrop-blur-md shadow-lg">
          {/* Tab Navigation */}
          <Nav activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Glass HUD Toggle */}
          <HUDToggle bgOpacity={bgOpacity} setBgOpacity={setBgOpacity} />
        </header>
        {}
        <main className='relative z-10 flex-1 overflow-hidden'>
          {/* Scanline Overlay */}
          <Scanline />

          {/* TAB 1: HOME - COMING SOON */}
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
            />
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
