'use client';

import { useState } from 'react';
import { faqs } from '@/lib/content';

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="relative py-24 sm:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

            <div className="relative mx-auto max-w-4xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#c4a47c]">
                        Questions Answered
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        Everything you need to know before your first visit.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="mt-16 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl border border-white/[0.06] bg-[#12121a]/30 overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.02]"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-medium text-white pr-4">{faq.question}</span>
                                <span className={`flex-shrink-0 h-8 w-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-[#c4a47c] border-[#c4a47c] rotate-180' : ''}`}>
                                    <svg
                                        className={`h-4 w-4 transition-colors ${openIndex === index ? 'text-[#0a0a0f]' : 'text-zinc-400'}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                                    }`}
                            >
                                <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <div className="mt-12 text-center rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#c4a47c]/5 to-transparent p-8">
                    <p className="text-lg text-white">Still have questions?</p>
                    <p className="mt-2 text-zinc-400">We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#booking"
                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c4a47c] to-[#d4bc9a] px-6 py-3 text-sm font-medium text-[#0a0a0f] transition-all hover:shadow-[0_0_25px_rgba(196,164,124,0.4)]"
                        >
                            Book a Consultation
                        </a>
                        <a
                            href="tel:+14075550188"
                            className="inline-flex items-center justify-center gap-2 text-[#c4a47c] hover:text-[#d4bc9a] transition-colors"
                        >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            (407) 555-0188
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
