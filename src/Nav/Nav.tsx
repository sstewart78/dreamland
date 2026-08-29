import Button from '../Button/Button'

import {
  BookOpen,
  Layers,
  MapPin,
  Sparkles,
} from 'lucide-react';

type NavProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  showMobileSchematicButton: boolean;
  isMobileAsideOpen: boolean;
  onToggleMobileSchematic: () => void;
};

export function Nav({ activeTab, onTabChange, showMobileSchematicButton, isMobileAsideOpen, onToggleMobileSchematic }: NavProps) {
    return (
        <nav className='flex flex-col gap-2 bg-black/60 p-1 rounded-lg border border-cyan-500/30 backdrop-blur-md md:flex-row items-center md:items-end  md:gap-2'>
            <div className='flex items-center gap-2'>
                <Button
                  activeTab={activeTab}
                  onTabChange={onTabChange}
                  page='home'
                  icon={<BookOpen className='w-3.5 h-3.5' />}
                  text='Overview'
                />
                <Button
                  activeTab={activeTab}
                  onTabChange={onTabChange}
                  page='saturn6'
                  icon={<MapPin className='w-3.5 h-3.5' />}
                  text='Saturn-6 Map'
                />
                <Button
                    activeTab={activeTab}
                    onTabChange={onTabChange}
                    page='preview'
                    icon={<Sparkles className='w-3.5 h-3.5' />}
                    text='Book'
                />
            </div>

            {showMobileSchematicButton && (
                <button
                    type='button'
                    onClick={onToggleMobileSchematic}
                    className={`flex items-center justify-center gap-2 rounded-md border px-4 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-all md:hidden ${
                        isMobileAsideOpen
                            ? 'border-cyan-400/80 bg-cyan-500/25 text-cyan-100 shadow-[0_0_15px_rgba(34,211,238,0.35)]'
                            : 'border-cyan-500/50 bg-cyan-500/10 text-cyan-200 hover:bg-cyan-500/20'
                    }`}
                >
                    <Layers className='w-3.5 h-3.5' />
                    Facility Schematic
                </button>
            )}
          </nav>
    );
}

export default Nav;