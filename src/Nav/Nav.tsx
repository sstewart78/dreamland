import Button from '../Button/Button'
import {
  BookOpen,
  MapPin,
} from 'lucide-react';

type NavProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export function Nav({ activeTab, onTabChange }: NavProps) {
    return (
        <nav className='flex items-center gap-2 bg-black/60 p-1 rounded-lg border border-cyan-500/30 backdrop-blur-md'>
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
          </nav>
    );
}

export default Nav;