"use client";

export default function Loading() {
    return (
        <div className="min-h-screen bg-midnight flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-gold/30 border-t-gold rounded-full mx-auto mb-4 animate-spin" />
                <p className="text-parchment font-serif text-xl">Loading...</p>
            </div>
        </div>
    );
}
