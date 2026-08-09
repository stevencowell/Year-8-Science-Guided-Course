window.YEAR8_SCIENCE_BUSY_WORK = {
  buildId: "year-8-science-2026-build-001",
  version: "0.3.0",
  storageKey: "year-8-science:busy-work:v0.3.0",
  sourceContractDigest: "sha256:642f12266c8416d6c34a5532709b594347cca6d2dda08ec19949601ae003974e",
  theoryAnchorStatus: "final",
  theoryRouteConvention: "../theory.html#<anchor>",
  theoryManifestDigest: "sha256:17e4c0ff60294e4c1661104ce0d6cfad9c00419adb782e4911deeb706900838b",
  theoryClaimAnchorsBySection: {
    "M01-S01": ["theory-m01-s01-data-sources", "theory-m01-s01-digital-traces", "theory-m01-s01-provenance-safe-use"],
    "M01-S02": ["theory-m01-s02-scientific-questions", "theory-m01-s02-variables-data-types", "theory-m01-s02-collecting-quality-data"],
    "M01-S03": ["theory-m01-s03-representing-data", "theory-m01-s03-patterns-conclusions", "theory-m01-s03-evaluating-solutions"],
    "M02-S01": ["theory-m02-s01-levels-of-organisation", "theory-m02-s01-major-body-systems", "theory-m02-s01-system-interrelationships"],
    "M02-S02": ["theory-m02-s02-plant-organs", "theory-m02-s02-specialised-tissues", "theory-m02-s02-connected-plant-system"],
    "M02-S03": ["theory-m02-s03-ecosystem-relationships", "theory-m02-s03-energy-food-webs", "theory-m02-s03-populations-extinction"],
    "M03-S01": ["theory-m03-s01-classifying-matter", "theory-m03-s01-properties-groups", "theory-m03-s01-selecting-materials"],
    "M03-S02": ["theory-m03-s02-atomic-structure", "theory-m03-s02-reading-simple-models", "theory-m03-s02-changing-scientific-models"],
    "M03-S03": ["theory-m03-s03-symbols-and-atomic-number", "theory-m03-s03-periods-groups-patterns", "theory-m03-s03-symbols-and-formulas"],
    "M04-S01": ["theory-m04-s01-systems-and-stores", "theory-m04-s01-transfers-and-transformations", "theory-m04-s01-energy-spread-and-diagrams"],
    "M04-S02": ["theory-m04-s02-physical-and-chemical-change", "theory-m04-s02-evidence-and-word-equations", "theory-m04-s02-conservation-and-evidence-quality"],
    "M04-S03": ["theory-m04-s03-geological-change-rock-cycle", "theory-m04-s03-fossils-layers-relative-age", "theory-m04-s03-plate-evidence-models"],
    "M05-S01": ["theory-m05-s01-model-purpose-components", "theory-m05-s01-models-and-evidence", "theory-m05-s01-limitations-appropriate-use"],
    "M05-S02": ["theory-m05-s02-simulation-components", "theory-m05-s02-predictions-and-evidence", "theory-m05-s02-evaluating-applications"],
    "M05-S03": ["theory-m05-s03-question-and-evidence", "theory-m05-s03-analysis-and-conclusion", "theory-m05-s03-reflection-and-source-record"]
  },
  activities: [
    {
      id: "BW-M01-S01", sectionId: "M01-S01", module: "Data science 1 - part A",
      title: "Source trail audit", mechanic: "source-audit",
      evidenceDestination: "Data-source and provenance record",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m01/#theory-m01-s01-provenance-safe-use",
      instructions: "Inspect each information source. Record what it contains, who produced it and whether it is safe and suitable for the stated science purpose.",
      rows: [
        { label: "Bureau weather dataset with date and station metadata", answer: "usable", feedback: "Usable when the station, date range and units are retained." },
        { label: "Unlabelled screenshot of a graph reposted on social media", answer: "trace-first", feedback: "Trace the original source before relying on an unlabelled repost." },
        { label: "Your own browsing history exported from a school device", answer: "private", feedback: "A digital trace can contain personal information and needs consent and safe handling." },
        { label: "Peer-reviewed study with authors, methods and references", answer: "usable", feedback: "It can be used with an accurate citation and a relevance check." }
      ]
    },
    {
      id: "BW-M01-S02", sectionId: "M01-S02", module: "Data science 1 - part A",
      title: "Question and variable builder", mechanic: "variable-map",
      evidenceDestination: "Question, variables and dataset collection record",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m01/#theory-m01-s02-variables-data-types",
      instructions: "Use the supplied scenario only; do not design a practical method. A computer model is run with different input temperatures and records the predicted rate of a process.",
      fields: [
        { key: "question", label: "Write an investigable question that connects the two variables.", type: "textarea" },
        { key: "independent", label: "Independent variable", type: "select", options: ["Choose", "Input temperature", "Predicted rate", "Model name"], answer: "Input temperature" },
        { key: "dependent", label: "Dependent variable", type: "select", options: ["Choose", "Input temperature", "Predicted rate", "Model name"], answer: "Predicted rate" },
        { key: "repeat", label: "Why should each model setting be run more than once?", type: "textarea" }
      ]
    },
    {
      id: "BW-M01-S03", sectionId: "M01-S03", module: "Data science 1 - part A",
      title: "Dataset decision desk", mechanic: "dataset-analysis",
      evidenceDestination: "Processed representation, conclusion and problem-solving justification",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m01/#theory-m01-s03-patterns-conclusions",
      instructions: "Analyse this synthetic simulation dataset: input 1, 2, 3, 4, 5 produces output 12, 21, 31, 42, 52.",
      data: [[1,12],[2,21],[3,31],[4,42],[5,52]],
      fields: [
        { key: "graph", label: "Most suitable graph", type: "select", options: ["Choose", "Line graph", "Pie chart", "Pictogram"], answer: "Line graph" },
        { key: "change", label: "Overall output change from input 1 to input 5", type: "number", answer: "40" },
        { key: "trend", label: "Describe the pattern and state one limitation of using five points.", type: "textarea" },
        { key: "decision", label: "Choose the best evidence-based claim", type: "select", options: ["Choose", "Output generally rises as input rises", "Output is always exactly ten times input", "The model proves the same pattern occurs in every real system"], answer: "Output generally rises as input rises" }
      ]
    },
    {
      id: "BW-M02-S01", sectionId: "M02-S01", module: "Living systems",
      title: "Body-system exchange network", mechanic: "network-match",
      evidenceDestination: "Annotated system representation and interrelationship explanation",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m02/#theory-m02-s01-system-interrelationships",
      instructions: "Complete the information flows between systems, then explain why the systems are interdependent.",
      rows: [
        { label: "Respiratory Ã¢â€ â€™ circulatory", answer: "oxygen", options: ["Choose", "oxygen", "digested nutrients", "nitrogenous wastes"] },
        { label: "Digestive Ã¢â€ â€™ circulatory", answer: "digested nutrients", options: ["Choose", "oxygen", "digested nutrients", "nitrogenous wastes"] },
        { label: "Circulatory Ã¢â€ â€™ excretory", answer: "nitrogenous wastes", options: ["Choose", "oxygen", "digested nutrients", "nitrogenous wastes"] }
      ],
      writtenPrompt: "Explain one consequence if a component in this exchange network cannot perform its function."
    },
    {
      id: "BW-M02-S02", sectionId: "M02-S02", module: "Living systems",
      title: "Plant structure-function match", mechanic: "matching",
      evidenceDestination: "Plant structure-function comparison and communicated explanation",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m02/#theory-m02-s02-specialised-tissues",
      instructions: "Match each plant structure to its main function, then compare two structures.",
      rows: [
        { label: "Roots", answer: "absorb water and mineral ions", options: ["Choose", "absorb water and mineral ions", "transport sugars", "transport water and mineral ions", "capture light and exchange gases"] },
        { label: "Xylem", answer: "transport water and mineral ions", options: ["Choose", "absorb water and mineral ions", "transport sugars", "transport water and mineral ions", "capture light and exchange gases"] },
        { label: "Phloem", answer: "transport sugars", options: ["Choose", "absorb water and mineral ions", "transport sugars", "transport water and mineral ions", "capture light and exchange gases"] },
        { label: "Leaf", answer: "capture light and exchange gases", options: ["Choose", "absorb water and mineral ions", "transport sugars", "transport water and mineral ions", "capture light and exchange gases"] }
      ],
      writtenPrompt: "Compare how xylem and phloem support the plant as a multicellular organism."
    },
    {
      id: "BW-M02-S03", sectionId: "M02-S03", module: "Living systems",
      title: "Ecosystem pathway and population evidence", mechanic: "ecosystem-path",
      evidenceDestination: "Food-web or energy-pyramid representation and population-data conclusion",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m02/#theory-m02-s03-populations-extinction",
      instructions: "Build a valid energy pathway and interpret the supplied fictional population data.",
      pathway: ["Sun", "grass", "grasshopper", "frog"],
      data: [[1,80,5],[2,72,8],[3,61,12],[4,49,17]],
      writtenPrompt: "The table shows native insects and an introduced predator over four surveys. Describe the relationship, then give one reason this pattern alone cannot prove cause."
    },
    {
      id: "BW-M03-S01", sectionId: "M03-S01", module: "Periodic table and atomic structure",
      title: "Matter classification and use board", mechanic: "classification",
      evidenceDestination: "Property/classification table and evidence-based use recommendation",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m03/#theory-m03-s01-selecting-materials",
      instructions: "Classify each material, then connect a stated property to a suitable use.",
      rows: [
        { label: "Copper", answer: "metal", options: ["Choose", "metal", "non-metal", "alloy", "compound"] },
        { label: "Sulfur", answer: "non-metal", options: ["Choose", "metal", "non-metal", "alloy", "compound"] },
        { label: "Brass", answer: "alloy", options: ["Choose", "metal", "non-metal", "alloy", "compound"] },
        { label: "Sodium chloride", answer: "compound", options: ["Choose", "metal", "non-metal", "alloy", "compound"] }
      ],
      writtenPrompt: "A cable needs a material that conducts electricity and can be drawn into wire. Recommend copper or sulfur and justify using the stated properties."
    },
    {
      id: "BW-M03-S02", sectionId: "M03-S02", module: "Periodic table and atomic structure",
      title: "Atomic model evidence timeline", mechanic: "timeline",
      evidenceDestination: "Annotated atomic model and model-change explanation",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m03/#theory-m03-s02-changing-scientific-models",
      instructions: "Place the model descriptions in historical order, then explain why scientific models change.",
      rows: [
        { label: "Solid-sphere model", answer: "1", options: ["Choose", "1", "2", "3", "4"] },
        { label: "Electrons embedded in positive matter", answer: "2", options: ["Choose", "1", "2", "3", "4"] },
        { label: "Small positive nucleus with mostly empty space", answer: "3", options: ["Choose", "1", "2", "3", "4"] },
        { label: "Electrons in defined energy levels", answer: "4", options: ["Choose", "1", "2", "3", "4"] }
      ],
      writtenPrompt: "Explain how new evidence or technology can lead scientists to revise an atomic model without making the earlier model useless in every context."
    },
    {
      id: "BW-M03-S03", sectionId: "M03-S03", module: "Periodic table and atomic structure",
      title: "First-18 periodic pattern labelling", mechanic: "periodic-pattern",
      evidenceDestination: "Periodic-pattern analysis and element/compound interpretation",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m03/#theory-m03-s03-periods-groups-patterns",
      instructions: "Use periodic information for the first 18 elements to complete each interpretation.",
      rows: [
        { label: "Atomic number of oxygen", answer: "8", options: ["Choose", "6", "8", "10", "16"] },
        { label: "Neutral oxygen atom: number of electrons", answer: "8", options: ["Choose", "6", "8", "10", "16"] },
        { label: "Element in the same group as lithium", answer: "sodium", options: ["Choose", "beryllium", "sodium", "neon", "chlorine"] },
        { label: "Elements present in HÃ¢â€šâ€šO", answer: "hydrogen and oxygen", options: ["Choose", "hydrogen only", "oxygen only", "hydrogen and oxygen", "helium and oxygen"] }
      ],
      writtenPrompt: "Describe one pattern that can be inferred from the positions of lithium and sodium, while avoiding a claim that position alone proves every property."
    },
    {
      id: "BW-M04-S01", sectionId: "M04-S01", module: "Change",
      title: "Energy system chain builder", mechanic: "energy-chain",
      evidenceDestination: "Energy-system representation and transfer/transformation explanation",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m04/#theory-m04-s01-energy-spread-and-diagrams",
      instructions: "Complete a representation of energy changes in a solar-battery-light system.",
      rows: [
        { label: "Sun Ã¢â€ â€™ solar panel", answer: "radiant transfer", options: ["Choose", "radiant transfer", "conduction", "chemical store"] },
        { label: "Solar panel output", answer: "electrical energy", options: ["Choose", "electrical energy", "elastic energy", "nuclear energy"] },
        { label: "Battery storage", answer: "chemical store", options: ["Choose", "kinetic store", "chemical store", "gravitational store"] },
        { label: "Light output", answer: "radiant energy", options: ["Choose", "radiant energy", "elastic energy", "gravitational energy"] }
      ],
      writtenPrompt: "Treat the lamp as the system. Explain one energy input, one useful output and one transfer to the surroundings."
    },
    {
      id: "BW-M04-S02", sectionId: "M04-S02", module: "Change",
      title: "Change evidence sorter", mechanic: "evidence-sort",
      evidenceDestination: "Observation record, word-equation explanation and investigation reflection",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m04/#theory-m04-s02-conservation-and-evidence-quality",
      instructions: "Classify each described change from evidence only. No practical procedure is supplied or implied.",
      rows: [
        { label: "Ice melts but remains water", answer: "physical", options: ["Choose", "physical", "chemical"] },
        { label: "Iron forms a new rust substance", answer: "chemical", options: ["Choose", "physical", "chemical"] },
        { label: "Sugar dissolves and can be recovered by removing water", answer: "physical", options: ["Choose", "physical", "chemical"] },
        { label: "Magnesium and oxygen form magnesium oxide", answer: "chemical", options: ["Choose", "physical", "chemical"] }
      ],
      fields: [
        { key: "equation", label: "Write the word equation for the final example.", type: "text", answer: "magnesium + oxygen -> magnesium oxide" },
        { key: "reflection", label: "Explain why one observation alone may be insufficient to classify an unfamiliar change.", type: "textarea" }
      ]
    },
    {
      id: "BW-M04-S03", sectionId: "M04-S03", module: "Change",
      title: "Plate-evidence claim desk", mechanic: "cer",
      evidenceDestination: "Geological model and claim-evidence-reasoning response",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m04/#theory-m04-s03-plate-evidence-models",
      instructions: "Use only the supplied observations: matching magnetic stripes occur on both sides of a mid-ocean ridge; earthquake and volcano locations cluster in narrow global belts.",
      rows: [
        { label: "Evidence that supports movement at the ridge", answer: "matching magnetic stripes", options: ["Choose", "matching magnetic stripes", "the ocean is blue", "all rocks are the same age"] },
        { label: "Evidence that supports plate-boundary locations", answer: "clustered earthquake and volcano belts", options: ["Choose", "random city locations", "clustered earthquake and volcano belts", "daily temperature"] }
      ],
      writtenPrompt: "Write a claim-evidence-reasoning response explaining how the two observations support a model of moving tectonic plates. State one limitation of the evidence set."
    },
    {
      id: "BW-M05-S01", sectionId: "M05-S01", module: "Data science 1 - part B and depth study",
      title: "Scientific model audit", mechanic: "model-audit",
      evidenceDestination: "Model components, evidence and limitation analysis",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m05/#theory-m05-s01-limitations-appropriate-use",
      instructions: "Audit a simplified rainfall-runoff model that uses rainfall and ground-cover inputs to predict runoff.",
      rows: [
        { label: "Rainfall and ground cover", answer: "inputs", options: ["Choose", "inputs", "output", "limitation"] },
        { label: "Predicted runoff", answer: "output", options: ["Choose", "inputs", "output", "limitation"] },
        { label: "Does not include soil type", answer: "limitation", options: ["Choose", "inputs", "output", "limitation"] }
      ],
      writtenPrompt: "Explain what observation or dataset could be used to check the model and why agreement would support, but not prove, the model."
    },
    {
      id: "BW-M05-S02", sectionId: "M05-S02", module: "Data science 1 - part B and depth study",
      title: "Simulation prediction challenge", mechanic: "simulation",
      evidenceDestination: "Prediction, parameter-change and model-evaluation response",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m05/#theory-m05-s02-evaluating-applications",
      instructions: "Change the model parameter, predict the output, run the simulation and evaluate the result. The simulation is illustrative, not a real-world forecast.",
      writtenPrompt: "Compare your prediction with the simulated output and explain one reason the model should not be treated as certainty."
    },
    {
      id: "BW-M05-S03", sectionId: "M05-S03", module: "Data science 1 - part B and depth study",
      title: "Depth-study evidence readiness check", mechanic: "portfolio-plan",
      evidenceDestination: "Printable question, evidence/data, analysis, conclusion, reflection and source record",
      theoryAnchor: "/Year-8-Science-Guided-Course/modules/y8s-m05/#theory-m05-s03-analysis-and-conclusion",
      instructions: "Prepare a method-neutral evidence plan for the five-hour depth-study portfolio. A teacher-approved practical method is not supplied.",
      checklist: ["Question is scientifically investigable", "Evidence or dataset source is identified", "Data representation is planned", "Analysis will address patterns and limitations", "Conclusion will answer the question", "Reflection and source record are included"],
      fields: [
        { key: "question", label: "Provisional scientific question", type: "textarea" },
        { key: "evidence", label: "Evidence or dataset needed", type: "textarea" },
        { key: "analysis", label: "How patterns, uncertainty and limitations will be analysed", type: "textarea" },
        { key: "source", label: "Source/provenance details to retain", type: "textarea" }
      ]
    }
  ]
};
