

export function Vignette ({bgOpacity}: {bgOpacity: number}) {
    return (
        <div className='absolute inset-0 bg-linear-to-t from-[#030508] via-transparent to-black/60 transition-opacity duration-500'
            style={{ opacity: bgOpacity <= 0.3 ? 0.1 : bgOpacity <= 0.6 ? 0.4 : 0.7 }} 
        />
    );
}

export default Vignette;