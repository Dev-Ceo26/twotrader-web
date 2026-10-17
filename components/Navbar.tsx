"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="T2T" width={40} height={40} priority />
          <span className="font-display font-bold text-xl tracking-widest text-gradient">
            T2T
          </span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <li><a href="#features" className="hover:text-cyan transition">Ecosystem</a></li>
          <li><a href="#dex" className="hover:text-cyan transition">T2T DEX</a></li>
          <li><a href="#tech" className="hover:text-cyan transition">Tech</a></li>
          <li><a href="#cta" className="hover:text-cyan transition">Launch</a></li>
        </ul>
        <a
          href="https://explorer-testnet.two-trader.io"
          target="_blank"
          rel="noreferrer"
          className="px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-deep via-azure to-neon shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_32px_rgba(0,255,136,0.6)] transition"
        >
          Explorer →
        </a>
      </div>
    </motion.nav>
  );
}
