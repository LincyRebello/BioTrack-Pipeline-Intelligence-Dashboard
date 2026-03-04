interface HeroProps {
  totalCandidates: number;
  totalCompanies: number;
  totalApproved: number;
}

const Hero = ({ totalCandidates, totalCompanies, totalApproved }: HeroProps) => (
  <section className="relative z-[1] px-12 pt-20 pb-16 border-b border-border overflow-hidden max-md:px-6 max-md:pt-12 max-md:pb-8">
    {/* Ambient glow */}
    <div className="fixed top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none z-0 bg-[radial-gradient(circle,_hsl(var(--bio-gold)/0.06)_0%,_transparent_70%)]" />
    <div className="fixed bottom-0 left-[-100px] w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none z-0 bg-[radial-gradient(circle,_hsl(var(--bio-teal)/0.04)_0%,_transparent_70%)]" />

    {/* Background text */}
    <div className="absolute top-[-1rem] right-[-2rem] font-display text-[18rem] font-black text-foreground/[0.018] pointer-events-none leading-none select-none max-md:text-[8rem]">
      Rx
    </div>

    <div className="text-[0.6rem] tracking-[0.2em] uppercase text-primary mb-6 flex items-center gap-3">
      <span className="w-[30px] h-px bg-primary" />
      Global Drug Development
    </div>

    <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.95] tracking-tight mb-8">
      Clinical Pipeline<em className="not-italic text-primary block">Intelligence</em>
    </h1>

    <div className="flex items-end justify-between gap-8 flex-wrap">
      <p className="text-[0.72rem] text-bio-muted2 leading-8 max-w-[420px]">
        The analytical lens a biotech analyst uses to evaluate pipeline risk, phase distribution, and commercial potential — visualized in real time.
      </p>

      <div className="flex gap-12">
        {[
          { num: totalCandidates, label: 'Candidates' },
          { num: totalCompanies, label: 'Companies' },
          { num: totalApproved, label: 'Approved' },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-end gap-1">
            <span className="font-display text-5xl font-bold leading-none">{s.num}</span>
            <span className="text-[0.58rem] tracking-[0.12em] uppercase text-bio-muted">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;
