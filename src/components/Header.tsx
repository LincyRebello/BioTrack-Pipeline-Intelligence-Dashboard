const Header = () => (
  <header className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center px-12 h-[70px] border-b border-border bg-background/90 backdrop-blur-xl max-md:grid-cols-2">
    <div className="font-display font-black text-xl tracking-wide">
      Bio<span className="text-primary italic">Track</span>
    </div>
    <div className="flex items-center gap-2 text-[0.6rem] tracking-[0.12em] uppercase text-bio-muted max-md:hidden">
      <span className="w-1.5 h-1.5 rounded-full bg-bio-green" style={{ animation: 'pulse-dot 2s ease-in-out infinite' }} />
      Pipeline Intelligence Platform
    </div>
    <div className="flex justify-end text-[0.6rem] tracking-wider text-bio-muted uppercase">
      FDA Data · 2023–2025
    </div>
  </header>
);

export default Header;
