import type { Drug } from '@/data/drugs';

interface FunnelChartProps {
  drugs: Drug[];
}

const phaseOrder = ['Phase I', 'Phase II', 'Phase III', 'Approved'] as const;
const phaseStyles: Record<string, { bg: string; text: string; fill: string }> = {
  'Phase I': { bg: 'bg-bio-blue/[0.12]', text: 'text-[hsl(var(--ph1-text))]', fill: 'bg-bio-blue/60' },
  'Phase II': { bg: 'bg-bio-amber/[0.12]', text: 'text-bio-amber', fill: 'bg-bio-amber/60' },
  'Phase III': { bg: 'bg-bio-green/[0.12]', text: 'text-bio-green', fill: 'bg-bio-green/60' },
  'Approved': { bg: 'bg-primary/[0.15]', text: 'text-primary', fill: 'bg-primary/60' },
};

const FunnelChart = ({ drugs }: FunnelChartProps) => {
  const total = drugs.length || 1;

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[0.58rem] tracking-[0.18em] uppercase text-bio-muted whitespace-nowrap">Pipeline Funnel</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      {phaseOrder.map((phase) => {
        const count = drugs.filter((d) => d.phase === phase).length;
        const pct = (count / total) * 100;
        const styles = phaseStyles[phase];

        return (
          <div key={phase} className="grid grid-cols-[90px_1fr_50px] items-center gap-4 mb-3 cursor-pointer group">
            <span className={`text-[0.58rem] px-2.5 py-1 rounded-sm tracking-wider text-center font-medium ${styles.bg} ${styles.text}`}>
              {phase}
            </span>
            <div className="h-7 bg-bio-surface2 border border-border overflow-hidden">
              <div
                className={`h-full flex items-center pl-2.5 text-[0.6rem] tracking-wider transition-all duration-1000 group-hover:brightness-125 ${styles.fill}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <span className="font-display text-xl font-bold text-right leading-none">{count}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FunnelChart;
