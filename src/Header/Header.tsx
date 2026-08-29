import Nav from '../Nav/Nav';
import HUDToggle from '../HUDToggle/HUDToggle';

type HeaderProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  bgOpacity: number;
  setBgOpacity: (opacity: number) => void;
  showMobileSchematicButton: boolean;
  isMobileAsideOpen: boolean;
  onToggleMobileSchematic: () => void;
};

function Header({ activeTab, onTabChange, bgOpacity, setBgOpacity, showMobileSchematicButton, isMobileAsideOpen, onToggleMobileSchematic }: HeaderProps) {
  return (
    <header className="relative z-50 flex flex-col md:flex-row items-center justify-between px-4 py-3 md:px-6 gap-3 md:gap-4 border-b border-cyan-500/30 bg-[#0a0d12]/90 backdrop-blur-md shadow-lg shrink-0">
      <Nav
        activeTab={activeTab}
        onTabChange={onTabChange}
        showMobileSchematicButton={showMobileSchematicButton}
        isMobileAsideOpen={isMobileAsideOpen}
        onToggleMobileSchematic={onToggleMobileSchematic}
      />
      <HUDToggle bgOpacity={bgOpacity} setBgOpacity={setBgOpacity} />
    </header>
  );
}

export default Header;