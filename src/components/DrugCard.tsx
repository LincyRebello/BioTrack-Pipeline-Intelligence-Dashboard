import type { Drug } from '@/data/drugs';

const phaseColors: Record<string, { bg: string; text: string; border: string }> = {
  'Phase I': { bg: 'bg-bio-blue/[0.12]', text: 'text-[hsl(var(--ph1-text))]', border: 'border-l-bio-blue' },
  'Phase II': { bg: 'bg-bio-amber/[0.12]', text: 'text-bio-amber', border: 'border-l-bio-amber' },
  'Phase III': { bg: 'bg-bio-green/[0.12]', text: 'text-bio-green', border: 'border-l-bio-green' },
  'Approved': { bg: 'bg-primary/[0.15]', text: 'text-primary', border: 'border-l-primary' },
};

const riskColors: Record<string, string> = {
  low: 'bg-bio-green',
  medium: 'bg-bio-amber',
  high: 'bg-bio-red',
};

interface DrugCardProps {
  drug: Drug;
  index: number;
  onClick: () => void;
}

const DrugCard = ({ drug, index, onClick }: DrugCardProps) => {
  const colors = phaseColors[drug.phase];

  return (
    <div
      onClick={onClick}
      className={`bg-bio-surface px-6 py-5 cursor-pointer transition-colors hover:bg-bio-surface2 border-l-[3px] ${colors.border}`}
      style={{ animation: `cardIn 0.5s ${index * 0.05}s forwards`, opacity: 0, transform: 'translateY(8px)' }}
    >
      <div className="flex justify-between items-start mb-2">
        <div>
          <div className="font-display text-lg font-bold tracking-tight leading-none">{drug.name}</div>
          <div className="text-[0.6rem] text-bio-muted2 mt-1 tracking-wider">{drug.company}</div>
        </div>
      </div>
      <div className="flex gap-1.5 flex-wrap mb-2.5">
        <span className={`text-[0.58rem] px-2 py-0.5 rounded-sm tracking-wider ${colors.bg} ${colors.text}`}>
          {drug.phase}
        </span>
        <span className="text-[0.58rem] px-2 py-0.5 rounded-sm tracking-wider bg-secondary text-bio-muted2">
          {drug.area}
        </span>
        <span className="text-[0.58rem] px-2 py-0.5 rounded-sm tracking-wider bg-secondary text-bio-muted2">
          {drug.mechanism}
        </span>
      </div>
      <div className="text-[0.63rem] text-bio-muted2 leading-7 flex items-start gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${riskColors[drug.risk]}`} />
        {drug.insight}
      </div>
    </div>
  );
};

export default DrugCard;
