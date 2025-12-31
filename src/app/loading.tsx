export default function Loading() {
    return (
        <div className="flex h-screen items-center justify-center bg-[#0b132b] text-[#d4af37]">
            <div className="text-center">
                <div className="mb-4 text-4xl animate-pulse">⚡</div>
                <h2 className="text-xl font-serif tracking-widest animate-bounce">
                    Casting spells...
                </h2>
            </div>
        </div>
    );
}
