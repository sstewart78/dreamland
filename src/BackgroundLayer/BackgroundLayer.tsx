import { Background } from '../Background/Background';
import { Vignette } from '../Vignette/Vignette'

export function BackgroundLayer({bgOpacity}: {bgOpacity: number}) {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Background />
            <Vignette bgOpacity={bgOpacity} />
        </div>
    )
}

export default BackgroundLayer;