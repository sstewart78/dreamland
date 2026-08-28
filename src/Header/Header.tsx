import Nav from '../Nav/Nav';
import HUDToggle from '../HUDToggle/HUDToggle';

type HeaderProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  bgOpacity: number;
  setBgOpacity: (opacity: number) => void;
};

function Header({ activeTab, onTabChange, bgOpacity, setBgOpacity }: HeaderProps) {
  return (
    <header className="relative z-50 flex items-center justify-between px-6 py-3 border-b border-cyan-500/30 bg-[#0a0d12]/80 backdrop-blur-md shadow-lg">
      <Nav activeTab={activeTab} onTabChange={onTabChange} />
      <HUDToggle bgOpacity={bgOpacity} setBgOpacity={setBgOpacity} />
    </header>
  );
}

export default Header;