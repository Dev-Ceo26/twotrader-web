"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="cta" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto relative rounded-[2.5rem] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 via-azure/10 to-neon/20" />
        <div className="absolute inset-0 glass" />
        <div className="relative z-10 p-12 md:p-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-black leading-tight mb-8"
          >
            Ready to <span className="text-gradient">trade</span> on
            <br /> the next generation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-10"
          >
            Two-Trader is live on testnet. Join the ecosystem, test the canon,
            trade on T2T DEX — and help shape the future of decentralized finance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://explorer-testnet.two-trader.io"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-deep via-azure to-neon text-black shadow-[0_0_30px_rgba(0,229,255,0.55)] hover:scale-[1.03] transition"
            >
              Enter Testnet
            </a>
            <a
              href="https://github.com/Dev-Ceo26/twotrader"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full font-semibold glass text-white hover:border-cyan transition"
            >
              View on GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
