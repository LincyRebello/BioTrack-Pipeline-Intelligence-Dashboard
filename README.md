# 🧬 BioTrack — Clinical Pipeline Intelligence

> *Biotech pipelines generate enormous amounts of public data, FDA approvals, trial registrations, regulatory designations, yet most of it sits unread in government databases. BioTrack pulls that data into one place and frames it the way analysts actually think about it: not just what a drug does, but what it's worth, what could kill it, and who it's competing against.*

[![Live App](https://img.shields.io/badge/▲%20LIVE%20APP-biotrack.lovable.app-black?style=for-the-badge)](https://id-preview--77a38645-63e4-470e-b7f4-1e0f0a4b1ad2.lovable.app/)
[![Status](https://img.shields.io/badge/STATUS-ACTIVE-brightgreen?style=for-the-badge)]()
[![Data](https://img.shields.io/badge/DATA-FDA%20%2F%20CLINICALTRIALS.GOV-c9a84c?style=for-the-badge)]()
[![Built With](https://img.shields.io/badge/BUILT%20WITH-LOVABLE-ff6b35?style=for-the-badge)]()

---

## 📌 About

Biotech pipeline data is messy, scattered, and deeply technical. But underneath all of it are patterns that tell a clear business story, which therapy areas are overcrowded, which regulatory designations actually move the needle, where capital is being deployed and why.

This started as a way to make sense of those patterns visually. It tracks real drug candidates across the FDA development pipeline, scores them by commercial risk, and surfaces the kind of context that turns raw trial data into an actual point of view.

> 🔄 **Living document** — pipeline data is updated as new FDA approvals and Phase 3 readouts are announced. Automation via ClinicalTrials.gov API + GitHub Actions in progress.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔬 **Pipeline Funnel** | Visual breakdown of candidates across Phase 1 → Phase 2 → Phase 3 → Approved |
| 🎯 **Risk Scoring** | Each drug rated Low / Medium / High based on phase, designation & competitive landscape |
| 💊 **Drug Cards** | Click any candidate for mechanism, enrollment, NCT ID, and analyst insight |
| 📊 **Approval Rates** | Real FDA approval benchmarks by therapy area |
| 🔍 **Live Filters** | Filter by phase, therapy area, or search by drug / company name |
| 💡 **Business Insights** | Sidebar with key 2024 pipeline trends and commercial takeaways |

---

## 💊 Drug Candidates Tracked

| Drug | Generic | Company | Phase | Therapy Area | Designation |
|------|---------|---------|-------|-------------|-------------|
| **Imdelltra** | tarlatamab-dlle | Amgen | ✅ Approved | Oncology | Breakthrough Therapy |
| **Leqembi** | lecanemab-irmb | Eisai / Biogen | ✅ Approved | Neurology | Breakthrough Therapy |
| **Imlunestrant** | imlunestrant | Eli Lilly | ✅ Approved | Oncology | Priority Review |
| **Givinostat** | givinostat | Italfarmaco | ✅ Approved | Neurology | Orphan Drug |
| **Arimoclomol** | arimoclomol | Zevra Therapeutics | ✅ Approved | Neurology | Orphan Drug |
| **Iptacopan** | iptacopan | Novartis | ✅ Approved | Immunology | Breakthrough Therapy |
| **Revumenib** | revumenib | Syndax Pharmaceuticals | ✅ Approved | Oncology | Priority Review |
| **Tarlatamab** | tarlatamab | Amgen | 🟢 Phase 3 | Oncology | Breakthrough Therapy |
| **Tirzepatide** | tirzepatide | Eli Lilly | 🟢 Phase 3 | Cardiology | Fast Track |
| **Osimertinib** | osimertinib | AstraZeneca | 🟢 Phase 3 | Oncology | Breakthrough Therapy |
| **Linvoseltamab** | linvoseltamab | Regeneron | 🟡 Phase 2 | Oncology | Breakthrough Therapy |
| **Sanbexin** | edaravone dexborneol | Simcere | 🟡 Phase 2 | Neurology | Breakthrough Therapy |

> More candidates added regularly. Priority given to first-in-class drugs, rare disease designations, and high-enrollment Phase 3 trials with near-term readouts.

---

## 🗂️ Data Sources

The same three sources a biotech analyst pulls up on day one.

| Source | What It Provided |
|--------|-----------------|
| 🏛️ [**FDA.gov**](https://www.fda.gov) | Approval dates, indications, designation types |
| 🔬 [**ClinicalTrials.gov**](https://clinicaltrials.gov) | NCT IDs, enrollment numbers, trial start years, phase status |
| 📄 **NEJM / JAMA / Press Releases** | Efficacy data — ORR, OS, hazard ratios used in analyst insights |

---

## 🧠 How Risk Is Scored

Risk scoring isn't just about phase — it accounts for the full commercial picture.

| Signal | What It Means |
|--------|--------------|
| 🟢 **Low Risk** | Phase 3 or approved, rare disease or breakthrough designation, strong interim data, limited competition |
| 🟡 **Medium Risk** | Phase 2, competitive indication, standard review, binary readout possible |
| 🔴 **High Risk** | Phase 1, no designation, crowded or historically difficult indication (CNS, metabolic) |

### Why Designations Matter

| Designation | Business Implication |
|-------------|---------------------|
| 🟣 **Breakthrough Therapy** | Accelerated FDA interaction — signals transformative potential |
| 🟠 **Orphan Drug** | 7-year market exclusivity + tax credits — strong pricing power |
| 🔵 **Fast Track** | Rolling review possible — reduces time-to-market risk |
| 🟡 **Priority Review** | 6-month vs 12-month review — 6 extra months of revenue |

---

## 📈 Key Numbers

```
34%   of 2024 FDA approvals were oncology — but Phase 3 → Approval conversion < 50%
44%   of 2024 approvals were first-in-class (highest proportion in 5 years)
$1.3B average cost to bring a drug to FDA approval
2.4×  faster review for Breakthrough Therapy / Orphan Drug designations
```

---

## 🤖 Automation Roadmap

Currently data is manually curated. The goal is to make it fully self-updating:

- [ ] **Phase 1** — Python script to pull new approvals from FDA API weekly
- [ ] **Phase 2** — ClinicalTrials.gov API integration for live phase/enrollment updates  
- [ ] **Phase 3** — GitHub Actions workflow to auto-commit data changes on a schedule
- [ ] **Phase 4** — NLP pipeline to pull efficacy numbers from published trial abstracts

---

## 🛠️ Built With

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Lovable](https://img.shields.io/badge/Lovable-ff6b35?style=flat-square)


---

*Data sourced from FDA.gov, ClinicalTrials.gov, and published Phase 2/3 trial results. Verified as of 2023–2025.*
