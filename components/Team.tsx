import { team } from '@/lib/content';

export default function Team() {
    return (
        <section id="team" className="relative py-24 sm:py-32">
            {/* Background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />

            <div className="relative mx-auto max-w-7xl px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#c4a47c]">
                        Expert Care
                    </p>
                    <h2 className="mt-4 font-[family-name:var(--font-playfair)] text-3xl font-medium text-white sm:text-4xl lg:text-5xl">
                        Meet Your Team
                    </h2>
                    <p className="mt-4 text-zinc-400 text-lg">
                        Our board-certified providers combine medical expertise with an artistic eye to deliver exceptional, natural-looking results.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {team.map((member, index) => (
                        <article
                            key={member.name}
                            className="group relative rounded-2xl border border-white/[0.06] bg-[#12121a]/30 overflow-hidden transition-all duration-500 hover:border-[#c4a47c]/20"
                        >
                            {/* Photo placeholder */}
                            <div
                                className="aspect-[4/5] bg-gradient-to-br from-[#1a1a24] to-[#12121a] relative overflow-hidden"
                                style={{
                                    backgroundImage: `linear-gradient(135deg, 
                    hsl(${35 + index * 10}, 25%, 18%) 0%, 
                    hsl(${25 + index * 10}, 20%, 12%) 100%)`,
                                }}
                            >
                                {/* Initials as placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="font-[family-name:var(--font-playfair)] text-6xl font-medium text-white/10">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>

                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 relative">
                                {/* Credentials badge */}
                                <span className="inline-block rounded-full border border-[#c4a47c]/30 bg-[#c4a47c]/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-[#c4a47c]">
                                    {member.credentials}
                                </span>

                                {/* Name & Title */}
                                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-medium text-white">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-[#c4a47c]">
                                    {member.title}
                                </p>

                                {/* Bio */}
                                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
