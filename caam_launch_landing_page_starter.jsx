import React from "react";
import { motion } from "framer-motion";

export default function CPI() {
  const fade = {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Pre‑Launch Banner */}
      <div className="w-full bg-[#C6A046] text-black text-center text-sm py-2">
        <strong>Pre‑Launch:</strong> We’re finalizing regulatory approvals under Reg A+ Tier 2. Join the waitlist to be notified at go‑live.
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a className="flex items-center gap-3" href="#home">
            <img src="/logo-cpi.png" alt="Correa Public Investments LLC" className="h-9 w-auto rounded-xl" />
            <span className="font-semibold tracking-wide">Correa Public Investments LLC</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a className="hover:text-white" href="#home">Home</a>
            <a className="hover:text-white" href="#impact">Why We Exist</a>
            <a className="hover:text-white" href="#about">About Us</a>
            <a className="hover:text-white" href="#philosophy">How We Invest</a>
            <a className="hover:text-white" href="#mission">Mission</a>
            <a className="hover:text-white" href="#join">Join</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a href="#join" className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition">
            Join the Mission
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C6A046]/10 via-transparent to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32 relative">
          <motion.div {...fade} className="max-w-3xl">
            <p className="mb-3 text-white/70 text-sm">Your Capital. Your Future. Our Discipline.</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We’re Building a New Kind of Investment Company — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A046] to-amber-600">For You.</span>
            </h1>
            <p className="mt-6 text-white/80 max-w-2xl">
              Generational wealth shouldn’t be reserved for the wealthy. We’re here to change that.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#join" className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-semibold hover:-translate-y-0.5 transition-transform">Join the Mission</a>
              <a href="#impact" className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold hover:bg-white/10">Learn More</a>
            </div>
            <p className="mt-4 text-xs text-white/60">* Informational only. Not an offer to sell or solicitation to buy securities. Any offering will be made pursuant to an Offering Circular qualified by the SEC under Regulation A+ Tier 2.</p>
          </motion.div>
        </div>
      </section>

      {/* CORE MESSAGE + VIDEO */}
      <section id="impact" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade} className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-white/10 bg-white/5 aspect-video flex items-center justify-center">
            <span className="text-white/60 text-sm">Founder video placeholder (45–60s)</span>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Why We Exist</h2>
            <ul className="mt-6 space-y-3 text-white/85 text-sm">
              <li>• Built for families, renters, and dreamers — not Wall Street.</li>
              <li>• Long‑term value investing with discipline and transparency.</li>
              <li>• A mission to help you achieve financial freedom.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div {...fade} className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold">Who We Are</h2>
              <p className="mt-4 text-white/80">
                Correa Public Investments LLC (CPI) is a long‑horizon investment platform led by founder Christopher Correa. We exist to open disciplined, fundamentals‑driven investing to everyday people. When you join CPI, you speak to a real person — we build your plan together.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 p-6">
              <h3 className="font-semibold">Differentiation</h3>
              <ul className="mt-3 space-y-2 text-white/80 text-sm">
                <li>• Human relationship + transparent reporting</li>
                <li>• Education baked into the journey</li>
                <li>• Pre‑defined entry/trim discipline; zero gimmicks</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INVESTMENT PHILOSOPHY */}
      <section id="philosophy" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade}>
          <h2 className="text-3xl md:text-4xl font-bold">How We Invest</h2>
          <p className="mt-4 text-white/80 max-w-3xl">
            Long‑term value investing with a modern edge, focused on industries shaping the future: AI, robotics, space, biotech, and next‑gen infrastructure. Targeting 15%+ average returns over time. All investing involves risk.
          </p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Feature title="Deep Research" body="DCF, unit economics, and moat stress‑tests inform every allocation." />
            <Feature title="Concentrated Portfolio" body="Up to 20 names; conviction weighted; staged entries and trims." />
            <Feature title="Transparency" body="Owner letters, clear reporting, and plain‑English updates." />
          </div>
        </motion.div>
      </section>

      {/* MISSION */}
      <section id="mission" className="bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div {...fade}>
            <h2 className="text-3xl md:text-4xl font-bold">Our Mission is Simple</h2>
            <p className="mt-2 text-lg text-white/85">Make Wealth‑Building Accessible to Everyone.</p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Feature title="Access" body="Open to investors from all backgrounds and income levels." />
              <Feature title="Education" body="We teach as we invest, so you understand the journey." />
              <Feature title="Results" body="Focused on real compounding—not hype." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fade} className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Be Part of the First Wave</h2>
            <p className="mt-4 text-white/80">
              We’re in pre‑launch while finalizing Reg A+ Tier 2 approval. Join the waitlist to be first in line when we open.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/0 p-8">
            <h3 className="text-xl font-semibold">Pre‑Launch Waitlist</h3>
            <form name="waitlist" method="POST" data-netlify="true" className="mt-6 grid gap-3">
              <input type="hidden" name="form-name" value="waitlist" />
              <input name="name" className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-white/50" placeholder="Full name" />
              <input name="email" className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-white/50" placeholder="Email address" />
              <input name="phone" className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-white/50" placeholder="Phone (optional)" />
              <button type="submit" className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-semibold">Join the Mission</button>
              <p className="text-xs text-white/60">We will never share your information.</p>
            </form>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div {...fade} className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold">Let’s Talk</h2>
              <p className="mt-4 text-white/80">Reach out and we’ll respond quickly.</p>
              <ul className="mt-4 text-white/80 text-sm space-y-2">
                <li>Email: <a href="mailto:info@correapublicinvestments.com" className="underline">info@correapublicinvestments.com</a></li>
                <li>LinkedIn • Instagram • X • YouTube</li>
              </ul>
            </div>
            <form name="contact" method="POST" data-netlify="true" className="rounded-3xl border border-white/10 p-6 grid gap-3">
              <input type="hidden" name="form-name" value="contact" />
              <input name="name" className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-white/50" placeholder="Name" />
              <input name="email" className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-white/50" placeholder="Email" />
              <textarea name="message" rows={4} className="rounded-2xl bg-white/10 border border-white/20 px-4 py-3 text-sm placeholder:text-white/50" placeholder="Message" />
              <button type="submit" className="rounded-2xl bg-white text-black px-5 py-3 text-sm font-semibold">Send</button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="font-semibold text-white">Correa Public Investments LLC</div>
              <div className="mt-1">© {new Date().getFullYear()} Correa Public Investments LLC. All rights reserved.</div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Disclosures</a>
            </div>
          </div>
          <p className="mt-6 text-xs">
            Correa Public Investments LLC is currently in its pre‑launch phase. This is not an offer to sell or a solicitation to buy any securities. Any such offering will be made only by means of an Offering Circular filed with and qualified by the SEC under Regulation A+ Tier 2. All investing involves risk, including loss of principal.
          </p>
        </div>
      </footer>
    </div>
  );
}

function Feature({ title, body }) {
  return (
    <div className="rounded-3xl border border-white/10 p-6 bg-white/5">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-white/80 text-sm">{body}</p>
    </div>
  );
}
