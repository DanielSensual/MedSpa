import { galleryItems } from '@/lib/content';

export default function Gallery() {
    return (
        <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-[#c4a47c]/[0.04] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#c4a47c]">
                        Real Results
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                        Before & After Gallery
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        See the transformative results our clients achieve. Each image represents real outcomes from treatments performed at our clinic.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {galleryItems.map((item, index) => (
                        <article
                            key={item.id}
                            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Placeholder gradient background */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-[#1a1a24] to-[#0a0a0f]"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, 
                    hsl(${30 + index * 15}, 30%, 15%) 0%, 
                    hsl(${20 + index * 15}, 25%, 10%) 100%)`,
                                }}
                            />

                            {/* Before/After indicator */}
                            <div className="absolute inset-x-0 top-0 flex">
                                <div className="flex-1 bg-gradient-to-r from-[#0a0a0f]/80 to-transparent py-2 px-4">
                                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400">Before</span>
                                </div>
                                <div className="flex-1 bg-gradient-to-l from-[#0a0a0f]/80 to-transparent py-2 px-4 text-right">
                                    <span className="text-[0.65rem] uppercase tracking-[0.2em] text-zinc-400">After</span>
                                </div>
                            </div>

                            {/* Center divider line */}
                            <div className="absolute top-8 bottom-20 left-1/2 w-px bg-white/20" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full border-2 border-white/40 bg-[#0a0a0f]/80 flex items-center justify-center">
                                <svg className="h-4 w-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                </svg>
                            </div>

                            {/* Content overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent p-5 pt-12">
                                <span className="inline-block rounded-full border border-[#c4a47c]/30 bg-[#c4a47c]/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-[#c4a47c]">
                                    {item.category}
                                </span>
                                <h3 className="mt-2 font-[family-name:var(--font-playfair)] text-lg font-medium text-white">
                                    {item.treatment}
                                </h3>
                                <p className="mt-1 text-sm text-zinc-400">
                                    {item.description}
                                </p>
                            </div>

                            {/* Hover effect */}
                            <div className="absolute inset-0 bg-[#c4a47c]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </article>
                    ))}
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-center text-xs text-zinc-500">
                    * Individual results may vary. Images are representative of typical outcomes.
                </p>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <a
                        href="#booking"
                        className="inline-flex items-center gap-2 text-[#c4a47c] hover:text-[#d4bc9a] transition-colors font-medium"
                    >
                        See more results in-person
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
