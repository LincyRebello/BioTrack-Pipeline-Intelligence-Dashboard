import type { Drug } from '@/data/drugs';

const phaseColors: Record<string, { bg: string; text: string }> = {
  'Phase I': { bg: 'bg-bio-blue/[0.12]', text: 'text-[hsl(var(--ph1-text))]' },
  'Phase II': { bg: 'bg-bio-amber/[0.12]', text: 'text-bio-amber' },
  'Phase III': { bg: 'bg-bio-green/[0.12]', text: 'text-bio-green' },
  'Approved': { bg: 'bg-primary/[0.15]', text: 'text-primary' },
};

interface DrugModalProps {
  drug: Drug | null;
  onClose: () => void;
}

const DrugModal = ({ drug, onClose }: DrugModalProps) => {
  if (!drug) return null;

  const colors = phaseColors[drug.phase];

  return (
    <div
      className="fixed inset-0 bg-black/75 z-[1000] flex items-center justify-center backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className="bg-bio-surface border border-input max-w-[560px] w-[90%] relative shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
        style={{ animation: 'modalIn 0.3s cubic-bezier(0.16,1,0.3,1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-8 pt-8 pb-6 border-b border-border relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 bg-transparent border-none font-mono text-[0.6rem] tracking-wider text-bio-muted cursor-pointer uppercase hover:text-foreground"
          >
            [ esc ] close
          </button>
          <div className="text-[0.58rem] tracking-[0.15em] uppercase text-primary mb-1.5">{drug.company}</div>
          <div className="font-display text-4xl font-black tracking-tight leading-none mb-3">{drug.name}</div>
          <div className="flex gap-1.5 flex-wrap">
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
        </div>

        <div className="px-8 pt-6 pb-8">
          <div className="grid grid-cols-2 gap-5 mb-6">
            {[
              { label: 'Target', value: drug.target },
              { label: 'Enrollment', value: drug.enrollment },
              { label: 'Next Catalyst', value: drug.catalyst },
              { label: 'Risk Profile', value: drug.risk?.charAt(0).toUpperCase() + drug.risk?.slice(1) },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-[0.55rem] tracking-[0.14em] uppercase text-bio-muted mb-0.5">{item.label}</div>
                <div className="font-cabinet font-bold text-sm text-foreground">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="bg-bio-surface2 border border-border border-l-[3px] border-l-primary px-5 py-4 text-[0.68rem] text-bio-muted2 leading-8">
            {drug.detailInsight}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrugModal;
