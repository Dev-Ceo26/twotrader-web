import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-cyan/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.svg" alt="T2T" width={40} height={40} />
              <span className="font-display font-bold text-xl tracking-widest text-gradient">
                T2T
              </span>
            </div>
            <p className="text-slate-400 max-w-md">
              Two-Trader is a quantum-ready EVM chain with a canonical decision
              layer. More than a platform. A trading ecosystem.
            </p>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-widest text-cyan mb-4">
              Ecosystem
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#dex" className="hover:text-white transition">T2T DEX</a></li>
              <li><a href="#tech" className="hover:text-white transition">Tech</a></li>
            </ul>
          </div>

          <div>
            <p className="font-display text-xs uppercase tracking-widest text-cyan mb-4">
              Links
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="https://explorer-testnet.two-trader.io" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  Explorer
                </a>
              </li>
              <li>
                <a href="https://github.com/Dev-Ceo26/twotrader" target="_blank" rel="noreferrer" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://two-trader.com" className="hover:text-white transition">
                  Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cyan/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Two-Trader (T2T). All rights reserved.</p>
          <p className="font-display tracking-widest">TRADE · ANALYZE · GROW</p>
        </div>
      </div>
    </footer>
  );
}
