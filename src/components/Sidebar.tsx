import { approvalRates } from '@/data/drugs';

const Sidebar = () => (
  <aside className="p-10 flex flex-col gap-8 bg-bio-surface max-md:p-6">
    {/* Key Insights */}
    <div>
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[0.58rem] tracking-[0.18em] uppercase text-bio-muted whitespace-nowrap">Key Insights</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      {[
        {
          kicker: 'Dominant Segment',
          headline: 'Oncology Oversaturation',
          metric: '38%',
          body: 'of all candidates are oncology-focused. Phase 3→Approval conversion sits below 50%, signaling significant pipeline risk for investors chasing crowded indications.',
        },
        {
          kicker: 'Capital Efficiency',
          headline: 'The Phase 2 Cliff',
          metric: '$1.3B',
          body: 'average cost to approval. Phase 2 is the primary attrition point — early efficacy signals are the #1 value driver in biotech M&A activity.',
        },
        {
          kicker: 'Regulatory Edge',
          headline: 'Rare Disease Premium',
          metric: '2.4×',
          body: 'faster review via Breakthrough & Orphan Drug designations — the key strategic lever separating nimble biotechs from large pharma timelines.',
        },
      ].map((insight, i) => (
        <div key={i} className={i < 2 ? 'mb-6' : ''}>
          <div className="text-[0.58rem] tracking-[0.14em] uppercase text-primary mb-1">{insight.kicker}</div>
          <div className="font-display text-base font-bold leading-tight mb-1">{insight.headline}</div>
          <div className="font-display text-4xl font-black text-primary leading-none my-1 italic">{insight.metric}</div>
          <div className="text-[0.63rem] text-bio-muted2 leading-8">{insight.body}</div>
        </div>
      ))}
    </div>

    {/* Approval Rates */}
    <div className="pt-8 border-t border-border">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[0.58rem] tracking-[0.18em] uppercase text-bio-muted whitespace-nowrap">Approval Rate by Area</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      {Object.entries(approvalRates).map(([area, pct]) => (
        <div key={area} className="flex items-center gap-3 mb-2.5 text-[0.62rem]">
          <span className="w-[78px] text-bio-muted2 flex-shrink-0">{area}</span>
          <div className="flex-1 h-1.5 bg-bio-surface2 border border-border overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-1000"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="w-7 text-right font-medium">{pct}%</span>
        </div>
      ))}
    </div>

    {/* Risk Legend */}
    <div className="pt-8 border-t border-border">
      <div className="flex items-center gap-4 mb-6">
        <span className="text-[0.58rem] tracking-[0.18em] uppercase text-bio-muted whitespace-nowrap">Risk Signal Key</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      <div className="flex flex-col gap-2.5">
        {[
          { color: 'bg-bio-green', label: 'Low Risk', desc: 'Phase 3, rare disease, breakthrough designation, strong interim data' },
          { color: 'bg-bio-amber', label: 'Medium Risk', desc: 'Phase 2, competitive indication, standard review timeline' },
          { color: 'bg-bio-red', label: 'High Risk', desc: 'Phase 1, no designation, CNS / metabolic, binary readout' },
        ].map((r) => (
          <div key={r.label} className="flex items-start gap-2.5 text-[0.62rem]">
            <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1 ${r.color}`} />
            <span className="text-bio-muted2 leading-relaxed">
              <strong className="text-foreground">{r.label}</strong> — {r.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default Sidebar;
