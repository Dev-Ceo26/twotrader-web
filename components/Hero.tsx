"use client";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden">
      <HeroScene />
      <div className="absolute inset-0 -z-10 bg-grid-glow" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-cyan/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-neon/10 blur-[140px] animate-pulse-glow" />
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display tracking-[0.35em] text-xs text-cyan mb-6"
        >
          TWO-TRADER ECOSYSTEM · CHAIN 332
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8"
        >
          <span className="text-gradient">TRADE.</span>{" "}
          <span className="text-white">ANALYZE.</span>
          <br />
          <span className="text-gradient">GROW.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10"
        >
          More than a platform. A trading ecosystem. Quantum-ready, decision-canonical,
          anti-scam by design.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://explorer-testnet.two-trader.io"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-cyan-deep via-azure to-neon text-black shadow-[0_0_30px_rgba(0,229,255,0.55)] hover:shadow-[0_0_50px_rgba(0,255,136,0.75)] transition-all hover:scale-[1.03]"
          >
            Launch Explorer
          </a>
          <a
            href="#dex"
            className="px-8 py-4 rounded-full font-semibold glass text-white hover:border-cyan transition"
          >
            Discover T2T DEX →
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 1 }}
          className="mt-20 relative rounded-3xl overflow-hidden glass border-cyan/20"
        >
          <Image
            src="/banner.png"
            alt="T2T Bull vs Bear"
            width={1200}
            height={630}
            priority
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
