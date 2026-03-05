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

// Drug data is now fetched dynamically from /data/pipeline.json
// Use the useDrugs() hook from @/hooks/useDrugs

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
