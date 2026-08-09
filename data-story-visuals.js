(() => {
  const stories = {
    "section-m01-s01": { image: "data-provenance-lab.png", title: "From source to trustworthy use", steps: [["1", "Source", "What was collected?"], ["2", "Dataset", "Organised records"], ["3", "Provenance", "Origin · method · limits"], ["4", "Decision", "Suitable and safe?"]] },
    "section-m01-s02": { image: "dataset-design-lab.png", title: "From a question to a useful dataset", steps: [["1", "Question", "What information can answer it?"], ["2", "Dataset design", "Variables · categories · units"], ["3", "Record consistently", "Repeated records and field meaning"], ["4", "Metadata", "Source · method · limits"]] },
    "section-m01-s03": { image: "data-patterns-lab.png", title: "From data to a careful conclusion", steps: [["1", "Represent", "Title · axes · units · scale"], ["2", "Inspect", "Pattern · spread · unusual values"], ["3", "Conclude", "Answer using evidence"], ["4", "Limit", "State what the data cannot show"]] }
  };
  Object.entries(stories).forEach(([id, story]) => {
    const section = document.getElementById(id); const original = section?.querySelector("figure");
    if (!section || !original) return;
    const visual = document.createElement("figure"); visual.className = "data-story-visual";
    visual.innerHTML = `<img src="/Year-8-Science-Guided-Course/assets/data-stories/${story.image}" alt="Science data investigation workspace"><div class="data-story-overlay"><p class="eyebrow">VISUAL WALKTHROUGH</p><h4>${story.title}</h4><div class="data-story-steps">${story.steps.map(([number,heading,copy]) => `<div><span>${number}</span><strong>${heading}</strong><small>${copy}</small></div>`).join("")}</div></div><figcaption>${original.querySelector("figcaption")?.textContent || "Use this sequence to organise your scientific thinking."} <a href="${original.querySelector("a")?.href || '#'}" target="_blank" rel="noopener">Open the detailed diagram</a></figcaption>`;
    original.replaceWith(visual);
  });
})();
