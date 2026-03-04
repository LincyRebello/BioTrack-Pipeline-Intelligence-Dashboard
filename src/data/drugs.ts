export interface Drug {
  id: string;
  name: string;
  company: string;
  phase: 'Phase I' | 'Phase II' | 'Phase III' | 'Approved';
  area: string;
  mechanism: string;
  risk: 'low' | 'medium' | 'high';
  insight: string;
  target?: string;
  enrollment?: string;
  catalyst?: string;
  detailInsight?: string;
}

export const drugs: Drug[] = [
  {
    id: '1', name: 'Veloranib', company: 'Aethon Therapeutics', phase: 'Phase III',
    area: 'Oncology', mechanism: 'VEGFR2 Inhibitor', risk: 'low',
    insight: 'Breakthrough designation granted; pivotal STELLAR trial shows 42% ORR in 2L NSCLC.',
    target: 'VEGFR2/KDR', enrollment: '1,240 pts', catalyst: 'PDUFA Q2 2025',
    detailInsight: 'Veloranib represents a potential best-in-class VEGFR2 inhibitor with a differentiated safety profile. The STELLAR trial demonstrated statistically significant PFS improvement (HR 0.58, p<0.001) versus standard of care in second-line NSCLC.'
  },
  {
    id: '2', name: 'Neurexia-7', company: 'Cortex Biosciences', phase: 'Phase II',
    area: 'Neurology', mechanism: 'NMDA Modulator', risk: 'high',
    insight: 'CNS penetration confirmed; Phase 2a futility analysis pending. Binary readout risk.',
    target: 'NMDA/GluN2B', enrollment: '380 pts', catalyst: 'Interim data Q3 2025',
    detailInsight: 'Neurexia-7 is a novel NMDA receptor modulator designed to improve synaptic plasticity in treatment-resistant depression. Phase 1b data showed dose-dependent MADRS improvement, but CNS trials carry inherent high-risk binary readout profiles.'
  },
  {
    id: '3', name: 'Cardivex', company: 'Helix Cardio', phase: 'Phase II',
    area: 'Cardiology', mechanism: 'PCSK9 siRNA', risk: 'medium',
    insight: 'Novel siRNA approach to LDL lowering. Phase 2 dose-optimization ongoing.',
    target: 'PCSK9 mRNA', enrollment: '620 pts', catalyst: 'Phase 3 initiation Q1 2025',
    detailInsight: 'Cardivex uses a next-generation GalNAc-conjugated siRNA to silence PCSK9 with twice-yearly dosing. Phase 2 data demonstrated 62% LDL reduction sustained over 6 months with favorable hepatic safety.'
  },
  {
    id: '4', name: 'Oncolyra', company: 'Meridian Oncology', phase: 'Phase I',
    area: 'Oncology', mechanism: 'CD47 × PD-L1 Bispecific', risk: 'high',
    insight: 'First-in-human dose escalation. Dual checkpoint mechanism with high theoretical promise.',
    target: 'CD47/PD-L1', enrollment: '84 pts', catalyst: 'Dose expansion Q4 2025',
    detailInsight: 'Oncolyra is a first-in-class bispecific antibody bridging innate and adaptive immunity through simultaneous CD47 and PD-L1 blockade. Early dose-escalation data show manageable anemia signals with preliminary anti-tumor activity in solid tumors.'
  },
  {
    id: '5', name: 'Immunara', company: 'Shield Biologics', phase: 'Approved',
    area: 'Immunology', mechanism: 'IL-23 Antagonist', risk: 'low',
    insight: 'FDA approved Dec 2024. Best-in-class durability with Q12W dosing in psoriasis.',
    target: 'IL-23p19', enrollment: 'N/A (Marketed)', catalyst: 'EU filing Q1 2025',
    detailInsight: 'Immunara achieved FDA approval based on the CLARITY Phase 3 program demonstrating PASI 90 response rates of 78% at Week 52 with quarterly dosing — positioning it as a best-in-class IL-23 inhibitor with potential $3B+ peak sales.'
  },
  {
    id: '6', name: 'Zelpara', company: 'Novex Pharma', phase: 'Phase III',
    area: 'Oncology', mechanism: 'KRAS G12C Inhibitor', risk: 'medium',
    insight: 'Registrational trial in CRC; competing with 3 other KRAS programs. Crowded space.',
    target: 'KRAS G12C', enrollment: '890 pts', catalyst: 'Top-line data Q4 2025',
    detailInsight: 'Zelpara targets the KRAS G12C mutation in colorectal cancer, an indication with high unmet need. While Phase 2 data showed 34% ORR, the competitive landscape with Sotorasib and Adagrasib creates commercial risk.'
  },
  {
    id: '7', name: 'Tremidex', company: 'Auros Neuro', phase: 'Phase I',
    area: 'Neurology', mechanism: 'Tau Aggregation Inhibitor', risk: 'high',
    insight: 'Alzheimer\'s pipeline entry. Tau-targeting approach; early PK/PD being evaluated.',
    target: 'Tau Protein', enrollment: '56 pts', catalyst: 'Phase 1b start Q2 2025',
    detailInsight: 'Tremidex represents a novel small-molecule approach to tau aggregation inhibition in early Alzheimer\'s disease. Preclinical data showed 70% reduction in phospho-tau in transgenic mouse models, but CNS drug development carries substantial translational risk.'
  },
  {
    id: '8', name: 'Renalyx', company: 'Apex Renal', phase: 'Phase II',
    area: 'Cardiology', mechanism: 'MR Antagonist', risk: 'medium',
    insight: 'Non-steroidal MRA for CKD. Phase 2 showed 30% eGFR slope improvement.',
    target: 'Mineralocorticoid Receptor', enrollment: '510 pts', catalyst: 'Phase 3 design Q3 2025',
    detailInsight: 'Renalyx is a next-generation non-steroidal mineralocorticoid receptor antagonist designed for chronic kidney disease with reduced hyperkalemia risk versus Finerenone. Phase 2 demonstrated significant eGFR slope preservation.'
  },
  {
    id: '9', name: 'Celtrion-X', company: 'Vanguard Immuno', phase: 'Phase III',
    area: 'Immunology', mechanism: 'Anti-TL1A', risk: 'low',
    insight: 'Pivotal IBD trial. TL1A is the hottest target in GI — potential blockbuster.',
    target: 'TL1A/TNFSF15', enrollment: '1,100 pts', catalyst: 'Interim analysis Q2 2025',
    detailInsight: 'Celtrion-X targets TL1A, the most validated new mechanism in inflammatory bowel disease. The HORIZON Phase 3 program in UC and CD has potential to define a new standard of care with dual mucosal healing and anti-fibrotic effects.'
  },
  {
    id: '10', name: 'Axivant', company: 'Luminos Oncology', phase: 'Approved',
    area: 'Oncology', mechanism: 'ADC (HER2-low)', risk: 'low',
    insight: 'Approved for HER2-low breast cancer. ADC platform with 3 additional indications in pipeline.',
    target: 'HER2 (low expression)', enrollment: 'N/A (Marketed)', catalyst: 'sNDA gastric Q2 2025',
    detailInsight: 'Axivant is a trastuzumab-based ADC with a novel topoisomerase payload achieving approval in HER2-low breast cancer. The platform technology supports expansion into gastric, NSCLC, and urothelial cancers with combined addressable market exceeding $8B.'
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
  { name: 'AETH', price: '$42.80', change: '+3.2%', up: true },
  { name: 'CRTX', price: '$18.45', change: '-1.8%', up: false },
  { name: 'HLXC', price: '$67.20', change: '+0.9%', up: true },
  { name: 'MRON', price: '$11.30', change: '-4.1%', up: false },
  { name: 'SHLD', price: '$124.55', change: '+2.7%', up: true },
  { name: 'NVXP', price: '$89.10', change: '+1.4%', up: true },
  { name: 'AURS', price: '$7.85', change: '-2.3%', up: false },
  { name: 'APEX', price: '$33.60', change: '+0.6%', up: true },
  { name: 'VGRD', price: '$56.90', change: '+5.1%', up: true },
  { name: 'LMNS', price: '$145.20', change: '+1.8%', up: true },
];
