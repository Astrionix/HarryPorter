"use client";

export default function ArcaneGridBackground() {
    return (
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
            {/* Lightweight CSS Grid Pattern */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(46, 139, 87, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(46, 139, 87, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                    backgroundPosition: 'center center'
                }}
            />

            {/* Subtle gradient overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)'
                }}
            />
        </div>
    );
}
