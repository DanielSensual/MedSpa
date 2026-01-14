import { testimonials } from '@/lib/content';

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#e8c4c4]/[0.04] blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#c4a47c]/[0.04] blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#c4a47c]">
                        Client Love
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        Don&apos;t just take our word for it — hear from the clients who trust us with their care.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={testimonial.name}
                            className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#12121a]/80 to-[#0a0a0f]/80 p-8 transition-all duration-500 hover:border-[#c4a47c]/20"
                        >
                            {/* Quote icon */}
                            <div className="absolute -top-4 left-6">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#c4a47c] text-[#0a0a0f]">
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                    </svg>
                                </div>
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mt-2">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg key={i} className="h-4 w-4 text-[#c4a47c]" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Treatment badge */}
                            <span className="mt-4 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.15em] text-zinc-400">
                                {testimonial.treatment}
                            </span>

                            {/* Quote */}
                            <blockquote className="mt-4 text-zinc-300 leading-relaxed">
                                &ldquo;{testimonial.quote}&rdquo;
                            </blockquote>

                            {/* Author */}
                            <div className="mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-6">
                                {/* Avatar placeholder */}
                                <div
                                    className="h-10 w-10 rounded-full bg-gradient-to-br from-[#c4a47c]/30 to-[#e8c4c4]/30 flex items-center justify-center"
                                >
                                    <span className="text-sm font-medium text-white/80">
                                        {testimonial.name[0]}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-white">{testimonial.name}</p>
                                    <p className="text-xs text-zinc-500">Verified Client</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-center">
                    <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-5 w-5 text-[#c4a47c]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">100+ 5-Star Reviews</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-5 w-5 text-[#c4a47c]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Board-Certified Providers</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                        <svg className="h-5 w-5 text-[#c4a47c]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm">98% Client Satisfaction</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
