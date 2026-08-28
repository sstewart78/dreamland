import Scanline from '../Scanline/Scanline';
import Home from '../Home/Home';
import Saturn6 from '../Saturn6/Saturn6';

type MainContentProps = {
  bgOpacity: number;
  setActiveTab: (tab: string) => void;
  activeTab: string;
};

export function MainContent({ bgOpacity, setActiveTab, activeTab }: MainContentProps) {
    const getGlassStyle = (opacityVal: number | undefined) => {
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
    );

}

export default MainContent;