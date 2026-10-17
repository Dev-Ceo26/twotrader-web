"use client";
import { motion } from "framer-motion";

const STATS = [
  { k: "Chain ID", v: "332" },
  { k: "Consensus", v: "QPoS" },
  { k: "Slot", v: "Adaptive" },
  { k: "Signatures", v: "3/5 Canon" },
  { k: "PQ-Ready", v: "Dilithium" },
  { k: "EVM", v: "Reth" }
];

export default function TechStats() {
  return (
    <section id="tech" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-display tracking-[0.35em] text-xs text-cyan mb-4">
            UNDER THE HOOD
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white">
            Quantum-<span className="text-gradient">ready</span>.
            <br />
            Canonically <span className="text-gradient">yours</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass rounded-2xl p-6 text-center hover:border-neon transition"
            >
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">
                {s.k}
              </p>
              <p className="font-display text-xl font-bold text-gradient">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
