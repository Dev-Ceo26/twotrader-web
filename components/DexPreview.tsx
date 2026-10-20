"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Zap, Shield } from "lucide-react";

export default function DexPreview() {
  return (
    <section id="dex" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display tracking-[0.35em] text-xs text-cyan mb-4">
            T2T DEX — POWERED BY SLE
          </p>
          <h2 className="font-display text-4xl md:text-6xl font-black leading-tight mb-6">
            Trade <span className="text-gradient">smart</span>.
            <br />
            No middle layer.
          </h2>
          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            The T2T DEX is the native trading module of the Two-Trader ecosystem.
            It is powered by the <strong className="text-white">Smart Liquidity Engine (SLE)</strong>,
            our original liquidity protocol that replaces the old v4 hook design.
            SLE adapts fees and limits based on market regimes — without opacity or hidden risks.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { icon: Zap, label: "Adaptive slot", value: "2s-30s" },
              { icon: Shield, label: "Veto window", value: "24h" },
              { icon: BarChart3, label: "Fee", value: "0.30%" }
            ].map((s) => (
              <div key={s.label} className="glass rounded-2xl p-4">
                <s.icon className="w-5 h-5 text-cyan mb-2" />
                <p className="text-[10px] uppercase tracking-widest text-slate-500">
                  {s.label}
                </p>
                <p className="font-display font-bold text-white">{s.value}</p>
              </div>
            ))}
          </div>

          <a
            href="https://explorer-testnet.two-trader.io"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-deep via-azure to-neon text-black shadow-[0_0_30px_rgba(0,229,255,0.45)] hover:scale-[1.03] transition"
          >
            Open T2T DEX <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl glass p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-6">
              <p className="font-display text-sm tracking-widest text-cyan">
                tT2T / mUSDC
              </p>
              <span className="text-xs px-3 py-1 rounded-full bg-neon/10 text-neon border border-neon/30">
                LIVE
              </span>
            </div>

            <div className="flex items-end gap-1 h-40 mb-6">
              {[30, 45, 38, 60, 55, 72, 68, 82, 78, 92, 85, 100, 95, 110].map(
                (h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className="flex-1 rounded-t bg-gradient-to-t from-azure/40 to-neon"
                  />
                )
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-panel/60 p-4">
                <p className="text-xs text-slate-500 mb-1">Reserve tT2T</p>
                <p className="font-display font-bold text-white">1,250,000</p>
              </div>
              <div className="rounded-xl bg-panel/60 p-4">
                <p className="text-xs text-slate-500 mb-1">Reserve mUSDC</p>
                <p className="font-display font-bold text-white">1,248,300</p>
              </div>
            </div>
          </div>

          <div className="absolute -inset-4 bg-gradient-to-r from-cyan/20 to-neon/20 blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
