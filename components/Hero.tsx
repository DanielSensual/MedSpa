'use client';

import { heroContent } from '@/lib/content';
import { useEffect, useRef } from 'react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Respect reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion && videoRef.current) {
            videoRef.current.pause();
        }
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    poster="/hero-poster.jpg"
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                </video>
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/70 via-[#0a0a0f]/50 to-[#0a0a0f]/90" />
                {/* Vignette effect */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0f_100%)] opacity-60" />
            </div>

            {/* Background gradient effects (on top of video) */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-[#c4a47c]/[0.08] blur-[120px]" />
                <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#e8c4c4]/[0.06] blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#c4a47c]/[0.03] blur-[150px]" />
            </div>

            {/* Subtle grid pattern */}
            <div
                className="pointer-events-none absolute inset-0 z-[1] opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-[2] mx-auto max-w-7xl px-6 py-24 text-center">
                {/* Eyebrow */}
                <p className="inline-flex items-center gap-2 rounded-full border border-[#c4a47c]/30 bg-[#c4a47c]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-[#c4a47c]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c4a47c] animate-pulse" />
                    {heroContent.eyebrow}
                </p>

                {/* Heading */}
                <h1 className="mt-8 font-[family-name:var(--font-playfair)] text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    {heroContent.heading.split(' ').map((word, i) => (
                        <span key={i} className={i === 1 ? 'text-[#c4a47c]' : ''}>
                            {word}{' '}
                        </span>
                    ))}
                </h1>

                {/* Subheading */}
                <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed sm:text-xl">
                    {heroContent.subheading}
                </p>

                {/* CTAs */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href={heroContent.primaryCta.href}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#c4a47c] to-[#d4bc9a] px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0a0a0f] transition-all hover:shadow-[0_0_40px_rgba(196,164,124,0.4)] hover:scale-[1.02]"
                    >
                        {heroContent.primaryCta.label}
                        <svg
                            className="h-4 w-4 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                    <a
                        href={heroContent.secondaryCta.href}
                        className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-all hover:border-white/30 hover:bg-white/5"
                    >
                        {heroContent.secondaryCta.label}
                    </a>
                </div>

                {/* Trust Stats */}
                <div className="mt-20 grid grid-cols-3 gap-8 border-t border-white/[0.06] pt-12 max-w-2xl mx-auto">
                    {heroContent.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <p className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-white sm:text-4xl">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
                <span className="text-[0.65rem] uppercase tracking-[0.3em]">Scroll</span>
                <div className="h-10 w-[1px] bg-gradient-to-b from-zinc-500 to-transparent" />
            </div>
        </section>
    );
}
