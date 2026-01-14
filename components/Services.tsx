import { services } from '@/lib/content';

export default function Services() {
    return (
        <section id="services" className="relative py-24 sm:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#c4a47c]">
                        Our Services
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                        Treatments Tailored to You
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        Every treatment is customized to your unique goals, delivered with precision and artistry by our expert team.
                    </p>
                </div>

                {/* Service Categories */}
                <div className="mt-16 space-y-16">
                    {services.map((category, categoryIndex) => (
                        <div key={category.category}>
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4a47c]/30 to-transparent" />
                                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-white">
                                    {category.category}
                                </h3>
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#c4a47c]/30 to-transparent" />
                            </div>
                            <p className="text-center text-zinc-400 mb-10 max-w-xl mx-auto">
                                {category.description}
                            </p>

                            {/* Service Cards */}
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {category.items.map((service, serviceIndex) => (
                                    <article
                                        key={service.name}
                                        className="group relative rounded-2xl border border-white/[0.06] bg-[#12121a]/50 p-6 transition-all duration-500 hover:border-[#c4a47c]/30 hover:bg-[#1a1a24]/50"
                                        style={{
                                            animationDelay: `${(categoryIndex * 3 + serviceIndex) * 100}ms`,
                                        }}
                                    >
                                        {/* Hover glow */}
                                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#c4a47c]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                        <div className="relative">
                                            {/* Service name */}
                                            <h4 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-white group-hover:text-[#c4a47c] transition-colors">
                                                {service.name}
                                            </h4>

                                            {/* Description */}
                                            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                                                {service.description}
                                            </p>

                                            {/* Price & Duration */}
                                            <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
                                                <div>
                                                    <p className="text-lg font-medium text-white">{service.price}</p>
                                                </div>
                                                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    {service.duration}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="#booking"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c4a47c]/40 bg-[#c4a47c]/10 px-8 py-4 text-sm font-medium text-[#c4a47c] transition-all hover:bg-[#c4a47c]/20 hover:border-[#c4a47c]/60"
                    >
                        View All Treatments
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
