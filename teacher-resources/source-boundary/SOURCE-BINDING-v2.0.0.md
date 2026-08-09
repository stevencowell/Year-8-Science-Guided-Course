# Year 8 Science teacher program - frozen source binding

## Build identity

- Build ID: `year-8-science-2026-build-001`
- Course: Standalone Year 8 NSW Science Website
- Cohort: Year 8 / Stage 4
- Program version: `2.0.0`
- Release state: `Local-only`
- Producer verdict: `PENDING` fresh independent audit

## Controlling inputs

| Input | Version | SHA-256 | Authority/use |
|---|---:|---|---|
| `task-1a-authority-and-sources/source-contract-v0.3.0.md` | 0.3.0 | `642f12266c8416d6c34a5532709b594347cca6d2dda08ec19949601ae003974e` | Ratified authority and fact boundary |
| `task-1b/theory-question-manifest-v1.1.1.json` | 1.1.1 | `17e4c0ff60294e4c1661104ce0d6cfad9c00419adb782e4911deeb706900838b` | Accepted theory bytes |
| `task-1b/TASK-1B-THEORY-HANDOFF-v1.1.2.json` | 1.1.2 | `c29a9e801a1ca264c5cdd37f3099179d12ecf08ff36ef821547f29f8612c2c4c` | `year-8-science-theory-question-handoff`; establishes producer completion and accepted dependency chain |
| `task-1b/audit-v1.1.2/content-audit-report-v1.1.2.md` | 1.1.2 | `1ac909b61500d9da3251b1f3c026ee76b10d478ff84a3c206fb436d0987e0fb1` | `year-8-science-theory-content-audit`; independent content-conformance `PASS` for the exact theory manifest |
| `task-1d-practice-and-evidence/busy-work-manifest-v1.0.0.json` | 1.0.0 | `02217742be18b3414196cd5dac21e7136d93d8590a7e64318682625a36144a47` | Current passed practice destinations |
| `task-1d-practice-and-evidence/youtube-manifest-v1.0.0.json` | 1.0.0 | `2b78fab564e95df918bc6e8f77127d3c3c0fe6d171339e2f3f26e5795f6e77c5` | Current passed video-learning destinations |
| `task-1d-practice-and-evidence/folio-evidence-manifest-v1.0.0-blocked.json` | 1.0.0-blocked | `7552139deb57983e76979a49cd119f181143b0a3adad84076b7e41aa77b0bda1` | `year-8-science-folio-evidence-manifest`; all 15 mappings retained but `BLOCKED` and `integration_eligible:false` |

## Narrow rework boundary

Version 1.0.2 preserves the accepted F1/F2 repairs and changes only F3: the three human-readable DOCX source-register filenames now name the actual v1.0.0 Busy Work, YouTube and blocked folio manifests. All accepted outcomes, modules, sections, content, teaching sequence, evidence purposes, adjustments and Teacher-to-confirm fields are preserved. Folio transfer is planned but cannot be integrated until the exact folio specialist gate passes.


## v1.0.3 layout-only rework

The five repeated delivery-ledger table width arrays change from `[1650, 900, 1050, 1050, 1050, 900, 1050, 1710]` to `[1650, 900, 1130, 1050, 1050, 900, 1050, 1630]`. Total width remains 9360 DXA. Curriculum wording, sources, mappings and Teacher to confirm controls are unchanged.


## v2.0.0 material presentation redesign

Primary view: `teacher-program-v2.0.0.docx`, a Letter-landscape 15-row at-a-glance program using the frozen integration-request route/anchor namespace. Supporting detailed notes: `teacher-program-narrative-notes-v2.0.0.docx`. Delivery tracking remains separate in `delivery-ledger-v2.0.0.docx`. The redesign preserves 5 modules, 15 sections, 12 exact NESA outcomes/statements, 7 Teacher-to-confirm controls, 110 mappings and all source/evidence boundaries from the exact v1.0.3 inputs. No destination is represented as live.
