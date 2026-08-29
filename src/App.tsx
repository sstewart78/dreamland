import { useState } from 'react'
import BackgroundLayer from './BackgroundLayer/BackgroundLayer';
import Header from './Header/Header';
import Animations from './Animations/Animations';
import MainContent from './MainContent/MainContent';

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bgOpacity, setBgOpacity] = useState(0.85);
  const [isMobileAsideOpen, setIsMobileAsideOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  return (
    <>
      <section className="relative flex flex-col h-screen text-cyan-50 font-sans overflow-hidden select-none bg-[#030500]">
        <BackgroundLayer bgOpacity={bgOpacity} />
        <Header
          activeTab={activeTab}
          onTabChange={setActiveTab}
          bgOpacity={bgOpacity}
          setBgOpacity={setBgOpacity}
          showMobileSchematicButton={activeTab === 'saturn6'}
          isMobileAsideOpen={isMobileAsideOpen}
          onToggleMobileSchematic={() => setIsMobileAsideOpen((open) => !open)}
        />
        <MainContent
          bgOpacity={bgOpacity}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          isMobileAsideOpen={isMobileAsideOpen}
          setIsMobileAsideOpen={setIsMobileAsideOpen}
          subscribed={subscribed}
          setSubscribed={setSubscribed}
          emailInput={emailInput}
          setEmailInput={setEmailInput}
        />
        <Animations />
      </section>
    </>
  )
}

export default App
