export default function ViciouzSocietyLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_25%)]" />
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:"linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize:"40px 40px"}} />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="mb-5 inline-block rounded-full border border-yellow-600/50 px-4 py-1 text-sm tracking-[0.25em] text-yellow-500">
                VICIOUZ SOCIETY®
              </p>
              <h1 className="max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl">
                Turn Your Music Into a <span className="text-yellow-500">Real Business</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
                Artist Development. Music Strategy. Monetization. Built for serious artists who are ready to move with structure, execution, and purpose.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#apply"
                  className="rounded-2xl bg-yellow-500 px-7 py-4 text-center text-base font-bold uppercase tracking-wide text-black shadow-2xl transition hover:scale-[1.02]"
                >
                  Apply to Work
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-zinc-700 px-7 py-4 text-center text-base font-bold uppercase tracking-wide text-white transition hover:border-yellow-500 hover:text-yellow-500"
                >
                  View Services
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Brand", "Build a real identity"],
                  ["Releases", "Structure winning rollouts"],
                  ["Revenue", "Turn streams into income"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-zinc-800 bg-zinc-950/70 p-5 shadow-xl backdrop-blur">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">{title}</p>
                    <p className="mt-2 text-sm text-zinc-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[2rem] bg-yellow-500/10 blur-2xl" />
              <div className="relative rounded-[2rem] border border-yellow-600/25 bg-gradient-to-br from-zinc-950 to-zinc-900 p-8 shadow-[0_0_80px_rgba(212,175,55,0.08)]">
                <div className="rounded-[1.5rem] border border-zinc-800 bg-black p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.35em] text-yellow-500">Built by Pressure</p>
                  <h2 className="mt-4 text-3xl font-black uppercase leading-tight md:text-4xl">
                    Most Artists Are Stuck Because They Have No Real Strategy
                  </h2>
                  <div className="mt-8 space-y-4 text-zinc-300">
                    {[
                      "No rollout plan",
                      "No monetization system",
                      "No clear brand positioning",
                      "No roadmap for sustainable growth",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-500" />
                        <p className="text-base">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl border border-yellow-600/30 bg-yellow-500/10 p-6">
                    <p className="text-sm uppercase tracking-[0.25em] text-yellow-500">Starting Rate</p>
                    <p className="mt-2 text-4xl font-black text-white">$3,000<span className="text-xl text-zinc-400">/month</span></p>
                    <p className="mt-3 text-zinc-300">For artists who are serious about growth, execution, and building a real music business.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-t border-zinc-900 bg-zinc-950/70 px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-500">Core Services</p>
            <h2 className="mt-4 text-4xl font-black uppercase md:text-5xl">Premium Music Business Support</h2>
            <p className="mt-4 text-lg text-zinc-400">
              Structured offers for independent artists, funded artists, and labels that need real direction and execution.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Artist Development Retainer",
                price: "$3,000/mo",
                text: "For independent artists serious about growth.",
                bullets: ["Strategy calls", "Brand positioning", "Release planning", "Monetization roadmap"],
              },
              {
                title: "Release & Marketing Campaign",
                price: "$5,000–$15,000",
                text: "For singles, EPs, and album rollouts.",
                bullets: ["Campaign strategy", "Budget allocation", "Content rollout calendar", "Performance optimization"],
              },
              {
                title: "Executive Partnership",
                price: "$7,500+/mo",
                text: "For funded artists and labels needing high-touch support.",
                bullets: ["Career oversight", "Deal guidance", "Revenue development", "Long-term catalog strategy"],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-[1.75rem] border border-zinc-800 bg-black p-7 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-500/50">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-yellow-500">{card.title}</p>
                <p className="mt-4 text-4xl font-black text-white">{card.price}</p>
                <p className="mt-3 text-zinc-400">{card.text}</p>
                <div className="mt-6 space-y-3">
                  {card.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-3 text-zinc-200">
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">Who This Is For</p>
            <h3 className="mt-4 text-3xl font-black uppercase">Not for hobbyists</h3>
            <div className="mt-6 space-y-4 text-zinc-300">
              <p>We work with artists who are ready to invest, execute, and build a sustainable career.</p>
              <div className="grid gap-3">
                {[
                  "Ready to move like a business, not a hobby",
                  "Open to strategy, accountability, and execution",
                  "Serious about long-term revenue and brand growth",
                ].map((item) => (
                  <div key={item} className="rounded-xl border border-zinc-800 bg-black p-4">{item}</div>
                ))}
              </div>
            </div>
          </div>

          <div id="apply" className="rounded-[2rem] border border-yellow-600/30 bg-gradient-to-br from-yellow-500/10 to-zinc-950 p-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-yellow-500">Apply to Work</p>
            <h3 className="mt-4 text-3xl font-black uppercase">Ready to Level Up?</h3>
            <p className="mt-4 text-zinc-300">
              DM <span className="font-bold text-yellow-500">LEVEL UP</span> or connect through your preferred platform to start the conversation.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a href="#" className="rounded-2xl bg-yellow-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-black transition hover:scale-[1.02]">
                DM LEVEL UP
              </a>
              <a href="#" className="rounded-2xl border border-zinc-700 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:border-yellow-500 hover:text-yellow-500">
                Book a Call
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-zinc-800 bg-black/70 p-5 text-sm text-zinc-400">
              Best used as your link-in-bio destination or as the main landing page on viciouzsociety.com.
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900 px-6 py-8 text-center text-sm uppercase tracking-[0.25em] text-zinc-500 md:px-10">
        Viciouz Society® — Built by Pressure
      </footer>
    </div>
  );
}
