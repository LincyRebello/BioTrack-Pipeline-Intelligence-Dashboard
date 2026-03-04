export interface Drug {
  id: string;
  name: string;
  generic: string;
  company: string;
  phase: 'Phase I' | 'Phase II' | 'Phase III' | 'Approved';
  area: string;
  indication: string;
  mechanism: string;
  enrollment: number;
  startYear: number;
  risk: 'low' | 'medium' | 'high';
  desig: string;
  nctid: string;
  insight: string;
}

export const drugs: Drug[] = [
  {
    id: '1', name: 'Imdelltra', generic: 'tarlatamab-dlle', company: 'Amgen',
    phase: 'Approved', area: 'Oncology', indication: 'Extensive-Stage Small Cell Lung Cancer',
    mechanism: 'Bispecific T-cell engager (DLL3 × CD3)', enrollment: 220, startYear: 2021,
    risk: 'low', desig: 'Breakthrough Therapy', nctid: 'NCT05060016',
    insight: 'FDA accelerated approval May 2024 (DeLLphi-301 trial). First-in-class DLL3-targeting bispecific. ORR of 40%, median OS 14.3 months in heavily pretreated ES-SCLC. Confirmatory Phase 3 (DeLLphi-304) ongoing to convert to full approval.'
  },
  {
    id: '2', name: 'Leqembi', generic: 'lecanemab-irmb', company: 'Eisai / Biogen',
    phase: 'Approved', area: 'Neurology', indication: 'Early Alzheimer\'s Disease (MCI / Mild Dementia)',
    mechanism: 'Anti-amyloid-beta protofibril monoclonal antibody', enrollment: 1795, startYear: 2019,
    risk: 'low', desig: 'Breakthrough Therapy', nctid: 'NCT03887455',
    insight: 'Full FDA approval July 2023 based on Clarity AD Phase 3 trial (1,795 pts). Slowed clinical decline by 27% on CDR-SB vs placebo. First anti-amyloid antibody to receive full approval. Subcutaneous autoinjector BLA filed 2024 for home dosing.'
  },
  {
    id: '3', name: 'Imlunestrant', generic: 'imlunestrant', company: 'Eli Lilly',
    phase: 'Approved', area: 'Oncology', indication: 'ER+/HER2− Breast Cancer (ESR1-mutant)',
    mechanism: 'Next-gen selective estrogen receptor degrader (SERD)', enrollment: 874, startYear: 2020,
    risk: 'low', desig: 'Priority Review', nctid: 'NCT04711252',
    insight: 'FDA approved September 2025 (EMBER-3 Phase 3 trial). Targets ESR1 mutations — the primary resistance mechanism to standard hormone therapy. Effective in combo with abemaciclib. Addresses large unmet need in 2L+ HR+ breast cancer.'
  },
  {
    id: '4', name: 'Tarlatamab', generic: 'tarlatamab', company: 'Amgen',
    phase: 'Phase III', area: 'Oncology', indication: 'ES-SCLC 1st Line (DeLLphi-304)',
    mechanism: 'Bispecific T-cell engager (DLL3 × CD3)', enrollment: 610, startYear: 2023,
    risk: 'low', desig: 'Breakthrough Therapy', nctid: 'NCT05765006',
    insight: 'Confirmatory Phase 3 to convert accelerated approval to full approval and expand to 1L setting. If positive, could displace atezolizumab + chemo as standard of care in ES-SCLC — a major commercial inflection.'
  },
  {
    id: '5', name: 'Tirzepatide', generic: 'tirzepatide', company: 'Eli Lilly',
    phase: 'Phase III', area: 'Cardiology', indication: 'Obstructive Sleep Apnea + Obesity (SURMOUNT-OSA)',
    mechanism: 'Dual GLP-1/GIP receptor agonist', enrollment: 469, startYear: 2022,
    risk: 'low', desig: 'Fast Track', nctid: 'NCT05412004',
    insight: 'SURMOUNT-OSA Phase 3 showed ~63% reduction in apnea-hypopnea index — FDA approved for OSA in 2024. First pharmacotherapy approved for OSA. Expands the $50B+ GLP-1 market into a massive new indication.'
  },
  {
    id: '6', name: 'Givinostat', generic: 'givinostat', company: 'Italfarmaco',
    phase: 'Approved', area: 'Neurology', indication: 'Duchenne Muscular Dystrophy (age 6+)',
    mechanism: 'HDAC inhibitor', enrollment: 179, startYear: 2019,
    risk: 'low', desig: 'Orphan Drug', nctid: 'NCT02851797',
    insight: 'FDA approved 2024 — only the third treatment for DMD. HDAC inhibition promotes muscle repair and reduces degeneration. Orphan Drug designation provides 7-year market exclusivity. Small patient population but high unmet need and strong pricing power.'
  },
  {
    id: '7', name: 'Arimoclomol', generic: 'arimoclomol', company: 'Zevra Therapeutics',
    phase: 'Approved', area: 'Neurology', indication: 'Niemann-Pick Disease Type C',
    mechanism: 'Heat shock protein co-inducer', enrollment: 119, startYear: 2016,
    risk: 'low', desig: 'Orphan Drug', nctid: 'NCT02612129',
    insight: 'FDA approved September 2024 — only approved therapy for this ultra-rare lysosomal storage disorder. HSP upregulation protects neurons from misfolded protein accumulation. Orphan status + zero competition = strong pricing power despite small patient population.'
  },
  {
    id: '8', name: 'Osimertinib', generic: 'osimertinib', company: 'AstraZeneca',
    phase: 'Phase III', area: 'Oncology', indication: 'EGFR-mutant NSCLC Adjuvant (LAURA trial)',
    mechanism: '3rd-gen EGFR tyrosine kinase inhibitor', enrollment: 216, startYear: 2018,
    risk: 'low', desig: 'Breakthrough Therapy', nctid: 'NCT03521154',
    insight: 'LAURA Phase 3 (NEJM 2024) showed unprecedented PFS benefit after chemoradiotherapy in unresectable Stage III EGFR+ NSCLC (39.1 vs 5.6 months, HR 0.16). New indication approval followed. Textbook example of post-market trials expanding addressable market.'
  },
  {
    id: '9', name: 'Linvoseltamab', generic: 'linvoseltamab', company: 'Regeneron',
    phase: 'Phase II', area: 'Oncology', indication: 'Relapsed/Refractory Multiple Myeloma',
    mechanism: 'Bispecific antibody (BCMA × CD3)', enrollment: 282, startYear: 2020,
    risk: 'medium', desig: 'Breakthrough Therapy', nctid: 'NCT03761108',
    insight: 'BCMA-targeting bispecific with ORR ~71% in heavily pretreated MM. Competes with Pfizer\'s elranatamab and J&J\'s teclistamab. Differentiation thesis rests on every-4-week dosing convenience post-induction and cleaner safety profile. BLA filed 2024.'
  },
  {
    id: '10', name: 'Iptacopan', generic: 'iptacopan', company: 'Novartis',
    phase: 'Approved', area: 'Immunology', indication: 'Paroxysmal Nocturnal Hemoglobinuria (PNH)',
    mechanism: 'Complement factor B inhibitor (oral)', enrollment: 97, startYear: 2021,
    risk: 'low', desig: 'Breakthrough Therapy', nctid: 'NCT04558918',
    insight: 'FDA approved December 2023 — first oral monotherapy for PNH. Disrupts IV eculizumab (Soliris) with same efficacy but once-daily oral dosing. Classic route-of-administration disruption play in a multi-billion dollar rare disease market. Strong commercial ramp in 2024.'
  },
  {
    id: '11', name: 'Revumenib', generic: 'revumenib', company: 'Syndax Pharmaceuticals',
    phase: 'Approved', area: 'Oncology', indication: 'Relapsed/Refractory AML (KMT2A or NPM1 mutant)',
    mechanism: 'Menin inhibitor', enrollment: 116, startYear: 2020,
    risk: 'low', desig: 'Priority Review', nctid: 'NCT04065399',
    insight: 'FDA approved Oct 2024 — first menin inhibitor class approval. AUGMENT-101 trial showed 23% CR rate with no other options available. Part of a major 2024 trend: 6 of 17 oncology approvals were biomarker-selected, genotype-specific drugs.'
  },
  {
    id: '12', name: 'Sanbexin', generic: 'edaravone dexborneol', company: 'Simcere Pharmaceuticals',
    phase: 'Phase II', area: 'Neurology', indication: 'Acute Ischemic Stroke',
    mechanism: 'Dual antioxidant / anti-inflammatory (sublingual)', enrollment: 3763, startYear: 2019,
    risk: 'medium', desig: 'Breakthrough Therapy', nctid: 'NCT04950920',
    insight: 'FDA Breakthrough Therapy designation Sep 2024 — first innovative stroke drug to receive this. TASTE-SL Phase 3 data showed improved functional outcomes within 48h of AIS onset. Stroke is a top cause of disability globally with very limited acute treatment options.'
  },
];

export const areas = ['All', 'Oncology', 'Neurology', 'Immunology', 'Cardiology'] as const;
export const phases = ['All', 'Phase I', 'Phase II', 'Phase III', 'Approved'] as const;

export const approvalRates: Record<string, number> = {
  'Oncology': 62,
  'Immunology': 78,
  'Neurology': 41,
  'Cardiology': 55,
};

export const tickerItems = [
  { name: 'AMGN', price: '$284.50', change: '+1.8%', up: true },
  { name: 'ESALY', price: '$14.20', change: '+3.1%', up: true },
  { name: 'LLY', price: '$782.30', change: '+2.4%', up: true },
  { name: 'AZN', price: '$67.80', change: '+0.6%', up: true },
  { name: 'REGN', price: '$1,045.60', change: '-0.9%', up: false },
  { name: 'NVS', price: '$103.40', change: '+1.2%', up: true },
  { name: 'SNDX', price: '$22.15', change: '+5.3%', up: true },
  { name: 'SMCR', price: '$8.90', change: '-2.1%', up: false },
  { name: 'ZVRA', price: '$4.65', change: '+0.8%', up: true },
  { name: 'ITFM', price: '$31.20', change: '+1.5%', up: true },
];
