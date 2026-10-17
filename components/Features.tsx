"use client";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Users } from "lucide-react";

const FEATURES = [
  {
    icon: TrendingUp,
    title: "REAL MARKETS",
    desc: "Trade on a chain designed to resist manipulation. No opaque signatures, no hidden payloads.",
    color: "from-cyan to-azure"
  },
  {
    icon: ShieldCheck,
    title: "SMART TOOLS",
    desc: "The Decision Canon: every value-moving action is a canonical object with 3/5 signatures, deadline and veto.",
    color: "from-azure to-neon"
  },
  {
    icon: Users,
    title: "GLOBAL COMMUNITY",
    desc: "A community-governed ecosystem. No human hand. Anti-scam by design. Native rescue.",
    color: "from-neon to-cyan"
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="font-display tracking-[0.35em] text-xs text-cyan mb-4">
            THE ECOSYSTEM
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white">
            Built for <span className="text-gradient">traders</span>.
            <br />
            Secured for <span className="text-gradient">everyone</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-3xl glass p-8 hover:border-cyan transition overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-[0.06] transition`} />
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${f.color} mb-6`}>
                <f.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                {f.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
