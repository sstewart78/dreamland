export function Animations() {
    return (
        /* Animations */
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes scan { from { transform: translateY(0); } to { transform: translateY(256px); } }
            @keyframes radar-sweep { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes reverse-spin { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
            @keyframes status-pulse { 0%, 100% { color: rgba(52, 211, 153, 0.85); text-shadow: 0 0 0 rgba(52, 211, 153, 0); } 50% { color: rgba(52, 211, 153, 1); text-shadow: 0 0 12px rgba(52, 211, 153, 0.7), 0 0 22px rgba(52, 211, 153, 0.45); } }
            .animate-scan { animation: scan 3s linear infinite; }
            .animate-radar-sweep { animation: radar-sweep 3.5s linear infinite; transform-origin: left center; }
            .animate-spin-slow { animation: spin-slow 20s linear infinite; }
            .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
            .animate-status-pulse { animation: status-pulse 2s ease-in-out infinite; }
            .custom-scrollbar::-webkit-scrollbar { width: 4px; height: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: rgba(10, 12, 14, 0.5); }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #0891b2; border-radius: 4px; } 4px; }
        `}} />
    );
}

export default Animations;