(() => {
  const base = "/Year-8-Science-Guided-Course";
  const commonsPage = "https://commons.wikimedia.org/wiki/File:Periodic_table_simple_en.svg";

  function createReference() {
    const reference = document.createElement("section");
    reference.className = "periodic-reference";
    reference.innerHTML = `
      <div class="periodic-work-table">
        <img src="${base}/assets/diagrams/vg-m03-s03-01-first-18-elements.svg" alt="Working table showing the first 18 elements, their atomic numbers and symbols, arranged by period and group.">
        <p><strong>First 18 working table.</strong> Use this smaller table for the patterns you are studying in this section.</p>
      </div>
      <div class="periodic-full-table">
        <div class="periodic-reference-heading"><div><p class="eyebrow">FULL REFERENCE</p><h4>Explore the whole periodic table</h4></div><button type="button" class="periodic-open" aria-haspopup="dialog">Zoom in</button></div>
        <button type="button" class="periodic-preview-button" aria-haspopup="dialog" aria-label="Open the full periodic table and zoom in">
          <img src="${base}/assets/references/periodic-table-simple-en.svg" alt="Full periodic table with English element names, symbols, atomic numbers and standard atomic weights.">
          <span>Open full table</span>
        </button>
        <p class="periodic-credit">Full table: László Németh, <a href="${commonsPage}" target="_blank" rel="noopener">Wikimedia Commons</a> (CC0).</p>
      </div>`;

    const dialog = document.createElement("dialog");
    dialog.className = "periodic-dialog";
    dialog.innerHTML = `
      <div class="periodic-dialog-bar"><strong>Full periodic table</strong><div><button type="button" class="periodic-zoom-out" aria-label="Zoom out">−</button><button type="button" class="periodic-zoom-in" aria-label="Zoom in">+</button><button type="button" class="periodic-close">Close</button></div></div>
      <div class="periodic-dialog-canvas"><img src="${base}/assets/references/periodic-table-simple-en.svg" alt="Full periodic table with English element names, symbols, atomic numbers and standard atomic weights."></div>
      <p>Use + and − to zoom. You can also open the <a href="${commonsPage}" target="_blank" rel="noopener">full source table</a> in a new tab.</p>`;
    document.body.append(dialog);

    let zoom = 1;
    const image = dialog.querySelector("img");
    const setZoom = (next) => {
      zoom = Math.max(1, Math.min(2.5, next));
      image.style.width = `${zoom * 100}%`;
      dialog.querySelector(".periodic-zoom-out").disabled = zoom <= 1;
      dialog.querySelector(".periodic-zoom-in").disabled = zoom >= 2.5;
    };
    const open = () => { setZoom(1); dialog.showModal(); };
    reference.querySelectorAll(".periodic-open, .periodic-preview-button").forEach((button) => button.addEventListener("click", open));
    dialog.querySelector(".periodic-close").addEventListener("click", () => dialog.close());
    dialog.querySelector(".periodic-zoom-in").addEventListener("click", () => setZoom(zoom + .25));
    dialog.querySelector(".periodic-zoom-out").addEventListener("click", () => setZoom(zoom - .25));
    dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
    return reference;
  }

  window.SciencePeriodicReference = { create: createReference };
  const section = document.getElementById("section-m03-s03");
  const firstBlock = section?.querySelector("section:not([id^='check-']):not([id^='response-'])");
  if (section && firstBlock && !section.querySelector(".periodic-reference")) firstBlock.after(createReference());
})();
