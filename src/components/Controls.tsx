import { phases, areas } from '@/data/drugs';

interface ControlsProps {
  activePhase: string;
  activeArea: string;
  search: string;
  onPhaseChange: (p: string) => void;
  onAreaChange: (a: string) => void;
  onSearchChange: (s: string) => void;
}

const Controls = ({ activePhase, activeArea, search, onPhaseChange, onAreaChange, onSearchChange }: ControlsProps) => (
  <div className="relative z-[5] px-12 py-3 border-b border-border flex items-center gap-2.5 flex-wrap bg-bio-surface max-md:px-6">
    <span className="text-[0.58rem] tracking-[0.12em] uppercase text-bio-muted">Phase</span>
    {phases.map((p) => (
      <button
        key={p}
        onClick={() => onPhaseChange(p)}
        className={`font-mono text-[0.62rem] tracking-wider px-3 py-1 border rounded-sm cursor-pointer transition-all ${
          activePhase === p
            ? 'bg-primary border-primary text-primary-foreground font-medium'
            : 'border-input bg-transparent text-bio-muted2 hover:border-primary hover:text-primary'
        }`}
      >
        {p}
      </button>
    ))}

    <div className="w-px h-5 bg-input mx-1" />

    <span className="text-[0.58rem] tracking-[0.12em] uppercase text-bio-muted">Area</span>
    {areas.map((a) => (
      <button
        key={a}
        onClick={() => onAreaChange(a)}
        className={`font-mono text-[0.62rem] tracking-wider px-3 py-1 border rounded-sm cursor-pointer transition-all ${
          activeArea === a
            ? 'bg-primary border-primary text-primary-foreground font-medium'
            : 'border-input bg-transparent text-bio-muted2 hover:border-primary hover:text-primary'
        }`}
      >
        {a}
      </button>
    ))}

    <input
      type="text"
      placeholder="Search pipeline…"
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="ml-auto font-mono text-[0.62rem] px-3 py-1 bg-bio-surface2 border border-input text-foreground rounded-sm outline-none w-[220px] tracking-wider focus:border-primary placeholder:text-bio-muted transition-colors"
    />
  </div>
);

export default Controls;
