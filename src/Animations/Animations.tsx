export function Animations() {
    return (
        /* Animations */
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scan { from { transform: translateY(0); } to { transform: translateY(256px); } }
          @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
          @keyframes reverse-spin { from { transform: translate(-50%, -50%) rotate(360deg); } to { transform: translate(-50%, -50%) rotate(0deg); } }
          .animate-scan { animation: scan 3s linear infinite; }
          .animate-spin-slow { animation: spin-slow 20s linear infinite; }
          .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
          .custom-scrollbar::-webkit-scrollbar { width: 4px }
          .custom-scrollbar::-webkit-scrollbar-track { background: rgba(10, 12, 14, 0.5); }
          .custom-scrollbar::-webkit-scrollbar-thumb { background: #0891b2; border-radius: 4px; }
        `}} />
    );
}

export default Animations;