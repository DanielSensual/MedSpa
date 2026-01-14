'use client';

import { useState } from 'react';
import { siteConfig, navLinks } from '@/lib/content';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0f]/90 backdrop-blur-xl">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a href="/" className="flex items-center gap-3 group">
                    <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c4a47c] to-[#e8c4c4] shadow-[0_0_20px_rgba(196,164,124,0.3)] group-hover:shadow-[0_0_30px_rgba(196,164,124,0.5)] transition-shadow" />
                    <span className="font-[family-name:var(--font-playfair)] text-xl font-medium tracking-wide text-white">
                        {siteConfig.name}
                    </span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="transition-colors hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="flex items-center gap-4">
                    <a
                        href="#booking"
                        className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c4a47c] to-[#d4bc9a] px-6 py-2.5 text-sm font-medium text-[#0a0a0f] transition-all hover:shadow-[0_0_25px_rgba(196,164,124,0.4)] hover:scale-[1.02]"
                    >
                        Book Now
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-white"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {mobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-white/[0.06] bg-[#0a0a0f]/95 backdrop-blur-xl">
                    <nav className="flex flex-col px-6 py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-zinc-400 hover:text-white transition-colors py-2"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#booking"
                            onClick={() => setMobileMenuOpen(false)}
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c4a47c] to-[#d4bc9a] px-6 py-3 text-sm font-medium text-[#0a0a0f] mt-2"
                        >
                            Book Consultation
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
