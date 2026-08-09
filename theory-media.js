(() => {
  const root = "/Year-8-Science-Guided-Course/assets/";
  const media = {
    "section-m01-s01": { file: "data-stories/data-provenance-lab.png", panel: 0, label: "Science in context", caption: "Collecting and checking data begins with an identifiable source and a careful record of how it was made.", alt: "A science student working with a data investigation at a laboratory bench." },
    "section-m01-s02": { file: "data-stories/dataset-design-lab.png", panel: 0, label: "Science in context", caption: "A useful question helps a scientist decide what needs to be measured, compared and recorded consistently.", alt: "A science investigation workspace being prepared for a dataset." },
    "section-m01-s03": { file: "data-stories/data-patterns-lab.png", panel: 0, label: "Science in context", caption: "Patterns become useful evidence only when they are represented clearly and interpreted with their limits in mind.", alt: "A student examining scientific data patterns at a laboratory bench." },
    "section-m02-s01": { file: "theory-media/living-systems-context.png", panel: 0, label: "Science in context", caption: "A torso model helps us see that body systems are connected rather than separate parts.", alt: "An anatomical torso model in a secondary science classroom." },
    "section-m02-s02": { file: "theory-media/living-systems-context.png", panel: 1, label: "Science in context", caption: "Plant structures can be observed as connected systems: roots, stems and leaves have specialised roles.", alt: "A plant with visible roots in a clear container on a science bench." },
    "section-m02-s03": { file: "theory-media/living-systems-context.png", panel: 2, label: "Science in context", caption: "Field observations help scientists investigate the relationships between organisms and their environment.", alt: "Students observing a wetland ecosystem from a boardwalk." },
    "section-m03-s01": { file: "theory-media/materials-and-atoms-context.png", panel: 0, label: "Science in context", caption: "Careful observations of everyday materials can reveal properties without assuming what causes them.", alt: "Unlabelled material samples, a hand lens and a science notebook on a bench." },
    "section-m03-s02": { file: "theory-media/materials-and-atoms-context.png", panel: 1, label: "Science in context", caption: "A physical model can support an explanation, while still having limits compared with the particles it represents.", alt: "A physical atomic model made from coloured spheres and orbit rings." },
    "section-m03-s03": { file: "theory-media/materials-and-atoms-context.png", panel: 2, label: "Science in context", caption: "The periodic table is a shared organising tool for comparing elements and looking for patterns.", alt: "Students viewing a large periodic table display in a secondary science classroom." },
    "section-m04-s01": { file: "theory-media/energy-and-earth-context.png", panel: 0, label: "Science in context", caption: "A small solar, battery and lamp system makes energy transfers visible in a safe classroom model.", alt: "A low-voltage solar panel, rechargeable battery and LED lamp on a science bench." },
    "section-m04-s02": { file: "theory-media/energy-and-earth-context.png", panel: 1, label: "Science in context", caption: "Observing a change is the starting point; the evidence helps distinguish physical and chemical change.", alt: "A melting ice sample and a rusted iron nail in separate observation trays." },
    "section-m04-s03": { file: "theory-media/energy-and-earth-context.png", panel: 2, label: "Science in context", caption: "Rock layers and fossils provide evidence that scientists compare with other clues about Earth’s past.", alt: "A fossil imprint in a layered rock outcrop." },
    "section-m05-s01": { file: "theory-media/models-and-evidence-context.png", panel: 0, label: "Science in context", caption: "A simple physical model lets scientists test an idea and decide what the model can and cannot show.", alt: "A student recording observations beside a simple physical measurement model." },
    "section-m05-s02": { file: "theory-media/models-and-evidence-context.png", panel: 1, label: "Science in context", caption: "A computer simulation can help explore patterns, but its output still needs to be checked against evidence.", alt: "A student using a laptop with an abstract science simulation." },
    "section-m05-s03": { file: "theory-media/models-and-evidence-context.png", panel: 2, label: "Science in context", caption: "A clear evidence record helps separate an observation, a pattern and the conclusion that the evidence supports.", alt: "A science evidence-planning notebook with a hand lens, ruler and pencil." }
  };

  Object.entries(media).forEach(([id, item]) => {
    const article = document.getElementById(id);
    const firstTeachingBlock = article?.querySelector('section:not([id^="check-"]):not([id^="response-"])');
    if (!article || !firstTeachingBlock || article.querySelector('.theory-media-wrap')) return;
    const card = document.createElement('aside');
    card.className = 'theory-media-wrap';
    card.innerHTML = `<figure class="theory-media-card"><a href="${root}${item.file}" target="_blank" rel="noopener" aria-label="Open larger: ${item.alt}"><span class="theory-media-frame"><img src="${root}${item.file}" alt="${item.alt}" style="transform:translateX(-${item.panel * 33.333}%);"></span></a><figcaption><span>${item.label}</span>${item.caption}<a href="${root}${item.file}" target="_blank" rel="noopener">Open larger</a></figcaption></figure>`;
    firstTeachingBlock.after(card);
    // The original diagram set has been superseded by the contextual photo card.
    // Keep the theory reading page focused instead of stacking a second worksheet-style visual.
    article.querySelectorAll(':scope > figure').forEach((figure) => figure.remove());
  });
})();
