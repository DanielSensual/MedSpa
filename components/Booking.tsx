import { bookingContent, siteConfig } from '@/lib/content';

export default function Booking() {
    return (
        <section id="booking" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c4a47c]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#c4a47c]/[0.03] via-transparent to-[#e8c4c4]/[0.03]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#c4a47c]/[0.05] blur-[150px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#c4a47c]">
                            Start Your Journey
                        </p>
                        <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                            {bookingContent.heading}
                        </h2>
                        <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                            {bookingContent.subheading}
                        </p>

                        {/* Features */}
                        <ul className="mt-8 space-y-4">
                            {bookingContent.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c4a47c]/20">
                                        <svg className="h-3.5 w-3.5 text-[#c4a47c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </span>
                                    <span className="text-zinc-300">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Contact Info */}
                        <div className="mt-10 pt-8 border-t border-white/[0.06]">
                            <p className="text-sm text-zinc-500 mb-4">Or reach us directly:</p>
                            <div className="space-y-3">
                                <a href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                                    <svg className="h-5 w-5 text-[#c4a47c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    {siteConfig.phone}
                                </a>
                                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                                    <svg className="h-5 w-5 text-[#c4a47c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    {siteConfig.email}
                                </a>
                                <div className="flex items-start gap-3 text-zinc-300">
                                    <svg className="h-5 w-5 text-[#c4a47c] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="whitespace-pre-line">{siteConfig.address}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Booking Form Card */}
                    <div className="relative">
                        <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#12121a] to-[#0a0a0f] p-8 shadow-2xl">
                            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-white text-center">
                                Book Your Consultation
                            </h3>
                            <p className="mt-2 text-center text-zinc-400 text-sm">
                                Free • No obligation • Takes 2 minutes
                            </p>

                            <form className="mt-8 space-y-5">
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="firstName" className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-[#c4a47c]/50 focus:outline-none focus:ring-1 focus:ring-[#c4a47c]/50 transition-colors"
                                            placeholder="Jane"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-[#c4a47c]/50 focus:outline-none focus:ring-1 focus:ring-[#c4a47c]/50 transition-colors"
                                            placeholder="Smith"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-[#c4a47c]/50 focus:outline-none focus:ring-1 focus:ring-[#c4a47c]/50 transition-colors"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white placeholder:text-zinc-600 focus:border-[#c4a47c]/50 focus:outline-none focus:ring-1 focus:ring-[#c4a47c]/50 transition-colors"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400 mb-2">
                                        Interested In
                                    </label>
                                    <select
                                        id="service"
                                        className="w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-white focus:border-[#c4a47c]/50 focus:outline-none focus:ring-1 focus:ring-[#c4a47c]/50 transition-colors"
                                    >
                                        <option value="" className="bg-[#12121a]">Select a treatment...</option>
                                        <option value="botox" className="bg-[#12121a]">Botox / Dysport</option>
                                        <option value="fillers" className="bg-[#12121a]">Dermal Fillers</option>
                                        <option value="lips" className="bg-[#12121a]">Lip Enhancement</option>
                                        <option value="laser" className="bg-[#12121a]">Laser Treatments</option>
                                        <option value="body" className="bg-[#12121a]">Body Contouring</option>
                                        <option value="other" className="bg-[#12121a]">Other / Not Sure</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-gradient-to-r from-[#c4a47c] to-[#d4bc9a] py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#0a0a0f] transition-all hover:shadow-[0_0_30px_rgba(196,164,124,0.4)] hover:scale-[1.01]"
                                >
                                    Request Consultation
                                </button>
                            </form>

                            <p className="mt-6 text-center text-xs text-zinc-500">
                                By submitting, you agree to our privacy policy. We&apos;ll never share your information.
                            </p>
                        </div>

                        {/* Decorative elements */}
                        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#c4a47c]/10 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-[#e8c4c4]/10 blur-3xl" />
                    </div>
                </div>

                {/* Hours */}
                <div className="mt-16 border-t border-white/[0.06] pt-12">
                    <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-500 mb-6">Hours of Operation</p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {siteConfig.hours.map((schedule) => (
                                <div key={schedule.day} className="text-center">
                                    <p className="text-zinc-400">{schedule.day}</p>
                                    <p className="text-white font-medium">{schedule.time}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
