const Footer = () => (
  <footer className="relative z-10 border-t border-primary bg-background/90 backdrop-blur-xl px-12 py-8 max-md:px-6">
    <div className="grid grid-cols-[auto_1fr_auto] gap-12 items-start max-md:grid-cols-1 max-md:gap-6">
      <div className="font-display font-black text-xl tracking-wide">
        Bio<span className="text-primary italic">Track</span>
      </div>

      <p className="text-[0.62rem] leading-[1.9] text-bio-muted2 max-w-[520px]">
        Data sourced from FDA.gov, ClinicalTrials.gov, and published Phase 2/3 trial results. Built to replicate the analytical lens used by biotech analysts to evaluate phase distribution, approval risk, and commercial potential.
      </p>

      <div className="flex flex-col items-end gap-1 text-[0.6rem] tracking-wider text-bio-muted uppercase max-md:items-start">
        <span>Built by Lincy Rebello</span>
        <span>Biotech Pipeline Intelligence · 2026</span>
      </div>
    </div>
  </footer>
);

export default Footer;
