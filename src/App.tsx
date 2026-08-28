import { useState } from 'react'
import BackgroundLayer from './BackgroundLayer/BackgroundLayer';
import Header from './Header/Header';
import Scanline from './Scanline/Scanline';
import Home from './Home/Home';
import Saturn6 from './Saturn6/Saturn6';
import Animations from './Animations/Animations';

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
        <BackgroundLayer bgOpacity={bgOpacity} />
        <Header
          activeTab={activeTab}
          onTabChange={setActiveTab}
          bgOpacity={bgOpacity}
          setBgOpacity={setBgOpacity}
        />
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
            />
          )}
        </main>
        <Animations />
      </section>
    </>
  )
}

export default App
