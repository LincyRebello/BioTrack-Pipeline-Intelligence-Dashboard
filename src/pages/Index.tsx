import { useState, useMemo, useEffect } from 'react';
import { drugs as allDrugs } from '@/data/drugs';
import Ticker from '@/components/Ticker';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Controls from '@/components/Controls';
import FunnelChart from '@/components/FunnelChart';
import DrugCard from '@/components/DrugCard';
import DrugModal from '@/components/DrugModal';
import Sidebar from '@/components/Sidebar';
import type { Drug } from '@/data/drugs';

const Index = () => {
  const [activePhase, setActivePhase] = useState('All');
  const [activeArea, setActiveArea] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);

  const filtered = useMemo(() => {
    return allDrugs.filter((d) => {
      if (activePhase !== 'All' && d.phase !== activePhase) return false;
      if (activeArea !== 'All' && d.area !== activeArea) return false;
      if (search) {
        const q = search.toLowerCase();
        return d.name.toLowerCase().includes(q) || d.company.toLowerCase().includes(q) || d.mechanism.toLowerCase().includes(q);
      }
      return true;
    });
  }, [activePhase, activeArea, search]);

  const totalCompanies = new Set(allDrugs.map((d) => d.company)).size;
  const totalApproved = allDrugs.filter((d) => d.phase === 'Approved').length;

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDrug(null);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="min-h-screen">
      <Ticker />
      <Header />
      <Hero totalCandidates={allDrugs.length} totalCompanies={totalCompanies} totalApproved={totalApproved} />
      <Controls
        activePhase={activePhase}
        activeArea={activeArea}
        search={search}
        onPhaseChange={setActivePhase}
        onAreaChange={setActiveArea}
        onSearchChange={setSearch}
      />

      <div className="relative z-[1] grid grid-cols-[1fr_320px] min-h-[calc(100vh-220px)] max-md:grid-cols-1">
        <div className="border-r border-border px-12 py-10 flex flex-col gap-10 max-md:px-6 max-md:border-r-0">
          <FunnelChart drugs={filtered} />

          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[0.58rem] tracking-[0.18em] uppercase text-bio-muted whitespace-nowrap">Drug Candidates</span>
              <span className="text-[0.6rem] px-2 py-0.5 bg-bio-surface2 border border-input rounded-full text-bio-muted2 ml-2">
                {filtered.length}
              </span>
              <span className="flex-1 h-px bg-border" />
            </div>

            {filtered.length > 0 ? (
              <div className="flex flex-col gap-px border border-border">
                {filtered.map((drug, i) => (
                  <DrugCard key={drug.id} drug={drug} index={i} onClick={() => setSelectedDrug(drug)} />
                ))}
              </div>
            ) : (
              <div className="py-16 px-8 text-center text-bio-muted text-sm">
                No candidates match the current filters.
              </div>
            )}
          </div>
        </div>

        <Sidebar />
      </div>

      {selectedDrug && <DrugModal drug={selectedDrug} onClose={() => setSelectedDrug(null)} />}
    </div>
  );
};

export default Index;
