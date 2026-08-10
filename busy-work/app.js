(function () {
  "use strict";

  const config = window.YEAR8_SCIENCE_BUSY_WORK;
  if (!config || !Array.isArray(config.activities)) throw new Error("Busy Work data is unavailable.");

  const blankState = () => ({
    schemaVersion: "1.0.0",
    buildId: config.buildId,
    sourceContractDigest: config.sourceContractDigest,
    identity: { name: "" },
    activities: {},
    updatedAt: null
  });

  let state = loadState();
  const activityRoot = document.querySelector("#activities");
  const template = document.querySelector("#activity-template");
  const saveStatus = document.querySelector("#save-status");
  let saveTimer;

  function loadState() {
    try {
      const parsed = JSON.parse(localStorage.getItem(config.storageKey));
      if (parsed && parsed.buildId === config.buildId && parsed.activities) return parsed;
    } catch (_) { /* Keep the page usable if a local record is damaged. */ }
    return blankState();
  }

  function valueFor(activityId, key, fallback = "") {
    return state.activities?.[activityId]?.[key] ?? fallback;
  }

  function setValue(activityId, key, value) {
    state.activities[activityId] ||= {};
    state.activities[activityId][key] = value;
    queueSave();
  }

  function queueSave() {
    saveStatus.textContent = "Saving…";
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveState, 180);
  }

  function saveState() {
    state.updatedAt = new Date().toISOString();
    try {
      localStorage.setItem(config.storageKey, JSON.stringify(state));
      saveStatus.textContent = `Saved on this device at ${new Date(state.updatedAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    } catch (_) {
      saveStatus.textContent = "Could not save. Back up or print this record now.";
    }
    updateProgress();
  }

  function safeId(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, "-"); }

  function makeSelect(activity, key, options, answer) {
    const select = document.createElement("select");
    select.dataset.key = key;
    if (answer !== undefined) select.dataset.answer = String(answer);
    select.setAttribute("aria-label", key);
    options.forEach(option => select.append(new Option(option, option)));
    select.value = valueFor(activity.id, key);
    select.addEventListener("change", () => {
      setValue(activity.id, key, select.value);
      showInlineFeedback(select);
      refreshCard(activity.id);
    });
    return select;
  }

  function showInlineFeedback(control) {
    const feedback = control.closest(".match-row, .prompt-field")?.querySelector(".inline-feedback");
    if (!feedback || !control.dataset.answer) return;
    const correct = normalise(control.value) === normalise(control.dataset.answer);
    feedback.textContent = correct ? "Correct." : control.value && control.value !== "Choose" ? "Check the relevant theory and try again." : "";
    feedback.className = `inline-feedback ${correct ? "correct" : control.value && control.value !== "Choose" ? "incorrect" : ""}`;
  }

  function renderRows(activity, host) {
    (activity.rows || []).forEach((row, index) => {
      const wrap = document.createElement("div");
      wrap.className = "match-row";
      const label = document.createElement("label");
      label.textContent = row.label;
      const options = row.options || optionsForMechanic(activity.mechanic);
      const select = makeSelect(activity, `row-${index}`, options, row.answer);
      label.append(select);
      const feedback = document.createElement("p");
      feedback.className = "inline-feedback";
      wrap.append(label, feedback);
      host.append(wrap);
      showInlineFeedback(select);
    });
  }

  function optionsForMechanic(mechanic) {
    if (mechanic === "source-audit") return ["Choose", "usable", "trace-first", "private"];
    return ["Choose"];
  }

  function renderFields(activity, host) {
    (activity.fields || []).forEach(field => {
      const wrap = document.createElement("div");
      wrap.className = "prompt-field";
      const label = document.createElement("label");
      label.textContent = field.label;
      let control;
      if (field.type === "select") {
        control = makeSelect(activity, `field-${field.key}`, field.options, field.answer);
      } else if (field.type === "textarea") {
        control = document.createElement("textarea");
        control.rows = 4;
      } else {
        control = document.createElement("input");
        control.type = field.type || "text";
      }
      control.dataset.key ||= `field-${field.key}`;
      if (field.answer !== undefined) control.dataset.answer = String(field.answer);
      control.value = valueFor(activity.id, control.dataset.key);
      if (control.tagName !== "SELECT") {
        control.addEventListener("input", () => {
          setValue(activity.id, control.dataset.key, control.value);
          refreshCard(activity.id);
        });
      }
      label.append(control);
      wrap.append(label);
      if (field.answer !== undefined) {
        const feedback = document.createElement("p");
        feedback.className = "inline-feedback";
        wrap.append(feedback);
        if (control.tagName !== "SELECT") control.addEventListener("change", () => showInlineFeedback(control));
        showInlineFeedback(control);
      }
      host.append(wrap);
    });
  }

  function renderTable(data, headers, host) {
    const table = document.createElement("table");
    table.className = "data-table";
    const caption = document.createElement("caption");
    caption.className = "sr-only";
    caption.textContent = "Supplied science dataset";
    const head = document.createElement("thead");
    const headRow = document.createElement("tr");
    headers.forEach(text => { const th = document.createElement("th"); th.scope = "col"; th.textContent = text; headRow.append(th); });
    head.append(headRow);
    const body = document.createElement("tbody");
    data.forEach(row => { const tr = document.createElement("tr"); row.forEach(value => { const td = document.createElement("td"); td.textContent = value; tr.append(td); }); body.append(tr); });
    table.append(caption, head, body);
    host.append(table);
  }

  function renderPathway(activity, host) {
    const options = ["Choose", ...activity.pathway];
    const pathway = document.createElement("div");
    pathway.className = "pathway";
    activity.pathway.forEach((answer, index) => {
      const label = document.createElement("label");
      label.textContent = `Position ${index + 1}`;
      const select = makeSelect(activity, `path-${index}`, options, answer);
      label.append(select);
      pathway.append(label);
    });
    host.append(pathway);
    renderTable(activity.data, ["Survey", "Native insects", "Introduced predator"], host);
  }

  function renderSimulation(activity, host) {
    const box = document.createElement("div");
    box.className = "simulation-box";
    const parameterLabel = document.createElement("label");
    const parameter = document.createElement("input");
    parameter.type = "range";
    parameter.min = "1";
    parameter.max = "10";
    parameter.value = valueFor(activity.id, "parameter", "5");
    const parameterText = document.createElement("span");
    parameterText.textContent = parameter.value;
    parameterLabel.append("Model parameter: ", parameterText, parameter);
    const predictionLabel = document.createElement("label");
    predictionLabel.textContent = "Your predicted output";
    const prediction = document.createElement("input");
    prediction.type = "number";
    prediction.value = valueFor(activity.id, "prediction");
    predictionLabel.append(prediction);
    const run = document.createElement("button");
    run.type = "button";
    run.textContent = "Run illustrative model";
    const result = document.createElement("p");
    result.className = "simulation-result";
    const storedResult = valueFor(activity.id, "result");
    if (storedResult !== "") result.textContent = `Simulated output: ${storedResult}`;
    parameter.addEventListener("input", () => { parameterText.textContent = parameter.value; setValue(activity.id, "parameter", parameter.value); refreshCard(activity.id); });
    prediction.addEventListener("input", () => { setValue(activity.id, "prediction", prediction.value); refreshCard(activity.id); });
    run.addEventListener("click", () => {
      const output = Math.round(8 + Number(parameter.value) * 4.2);
      setValue(activity.id, "result", String(output));
      result.textContent = `Simulated output: ${output}`;
      refreshCard(activity.id);
    });
    box.append(parameterLabel, predictionLabel, run, result);
    host.append(box);
  }

  function renderChecklist(activity, host) {
    const list = document.createElement("div");
    list.className = "check-list";
    activity.checklist.forEach((item, index) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = Boolean(valueFor(activity.id, `check-${index}`, false));
      input.addEventListener("change", () => { setValue(activity.id, `check-${index}`, input.checked); refreshCard(activity.id); });
      label.append(input, document.createTextNode(item));
      list.append(label);
    });
    host.append(list);
  }

  function renderActivity(activity) {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".activity-card");
    card.dataset.activityId = activity.id;
    card.id = safeId(activity.id);
    card.querySelector("h2").textContent = activity.title;
    card.querySelector(".instructions").textContent = activity.instructions;
    const host = card.querySelector(".activity-body");

    if (activity.mechanic === "periodic-pattern") { const reference=document.createElement("img"); reference.className="periodic-reference"; reference.src="../assets/diagrams/vg-m03-s03-01-first-18-elements.svg"; reference.alt="Reference table of the first 18 elements, arranged by period and group."; host.append(reference); }
    if (activity.data && activity.mechanic === "dataset-analysis") renderTable(activity.data, ["Input", "Output"], host);
    if (activity.mechanic === "ecosystem-path") renderPathway(activity, host);
    else if (activity.mechanic === "simulation") renderSimulation(activity, host);
    else {
      renderRows(activity, host);
      if (activity.mechanic === "portfolio-plan") renderChecklist(activity, host);
      renderFields(activity, host);
    }

    const writtenWrap = card.querySelector(".written-wrap");
    if (activity.writtenPrompt) {
      writtenWrap.querySelector(".written-label").textContent = activity.writtenPrompt;
      const written = writtenWrap.querySelector("textarea");
      written.value = valueFor(activity.id, "written");
      written.addEventListener("input", () => { setValue(activity.id, "written", written.value); refreshCard(activity.id); });
    } else {
      writtenWrap.remove();
    }

    const theory = card.querySelector(".theory-link");
    if (config.theoryAnchorStatus === "final" && !activity.theoryAnchor.startsWith("__")) {
      theory.href = activity.theoryAnchor;
      theory.textContent = "Review the relevant theory";
      theory.classList.remove("is-pending");
      theory.removeAttribute("aria-disabled");
    } else {
      theory.textContent = `Theory link pending for ${activity.sectionId}`;
      theory.addEventListener("click", event => event.preventDefault());
    }

    card.querySelector(".check-activity").addEventListener("click", () => checkActivity(activity, card));
    refreshCardElement(activity, card);
    return fragment;
  }

  function requiredControls(activity, card) {
    return [...card.querySelectorAll("select, input:not([type='range']), textarea")].filter(control => control.id !== "student-name");
  }

  function normalise(value) {
    return String(value ?? "").trim().toLowerCase().replace(/[–—]/g, "-").replace(/\s+/g, " ");
  }

  function completionFor(activity, card) {
    const controls = requiredControls(activity, card);
    const filled = controls.every(control => control.type === "checkbox" ? control.checked : normalise(control.value) && control.value !== "Choose");
    const structuredCorrect = controls.filter(control => control.dataset.answer).every(control => normalise(control.value) === normalise(control.dataset.answer));
    if (activity.mechanic === "simulation" && valueFor(activity.id, "result") === "") return false;
    return filled && structuredCorrect;
  }

  function checkActivity(activity, card) {
    card.querySelectorAll("[data-answer]").forEach(showInlineFeedback);
    const feedback = card.querySelector(".activity-feedback");
    const complete = completionFor(activity, card);
    feedback.textContent = complete ? "Evidence is complete and ready to revisit or print." : "Some evidence is incomplete or needs another attempt. Use the relevant theory when its section link is released.";
    feedback.className = `activity-feedback ${complete ? "good" : "needs-work"}`;
    refreshCardElement(activity, card);
    queueSave();
  }

  function refreshCard(activityId) {
    const activity = config.activities.find(item => item.id === activityId);
    const card = document.querySelector(`[data-activity-id="${activityId}"]`);
    if (activity && card) refreshCardElement(activity, card);
    updateProgress();
  }

  function refreshCardElement(activity, card) {
    const complete = completionFor(activity, card);
    card.classList.toggle("is-complete", complete);
    const badge = card.querySelector(".completion-badge");
    if (badge) badge.textContent = complete ? "Ready" : "In progress";
  }

  function updateProgress() {
    const complete = config.activities.filter(activity => {
      const card = document.querySelector(`[data-activity-id="${activity.id}"]`);
      return card && completionFor(activity, card);
    }).length;
    const progressText = document.querySelector("#progress-text");
    const progressBar = document.querySelector("#progress-bar");
    if (progressText) progressText.textContent = `${complete} of ${config.activities.length} activities ready`;
    if (progressBar) progressBar.value = complete;
    const libraryProgress = document.querySelector("#library-progress");
    if (libraryProgress) libraryProgress.textContent = `${complete} of ${config.activities.length} activities ready`;
  }

  function renderAll() {
    activityRoot.replaceChildren();
    const picker = document.querySelector("#activity-picker");
    picker.replaceChildren();
    const activeId = location.hash.replace("#", "");
    const modules = [...new Set(config.activities.map(activity => activity.module))];
    const prompts = {
      "Data science 1 - part A": "Ask better questions and make sense of information.",
      "Living systems": "Explore the systems that keep living things working.",
      "Periodic table and atomic structure": "Look closely at matter, atoms and patterns.",
      "Change": "Follow energy, materials and Earth as they change.",
      "Data science 1 - part B and depth study": "Use models, predictions and evidence like a scientist."
    };
    modules.forEach(moduleName => {
      const group = document.createElement("section"); group.className = "picker-module";
      const moduleNumber = modules.indexOf(moduleName) + 1;
      group.style.setProperty("--module-image", `url(assets/learning/m${String(moduleNumber).padStart(2, "0")}.png)`);
      const heading = document.createElement("h3"); heading.textContent = moduleName;
      const intro = document.createElement("p"); intro.className = "module-prompt"; intro.textContent = prompts[moduleName] || "Choose a short science challenge.";
      group.append(heading, intro);
      const list = document.createElement("div"); list.className = "picker-list";
      config.activities.filter(activity => activity.module === moduleName).forEach((activity, index) => {
        const button = document.createElement("a"); const id = safeId(activity.id); button.href = `#${id}`; button.className = "activity-choice";
        button.dataset.target = id; button.innerHTML = `<span class="choice-image tile-${index + 1}" aria-hidden="true"></span><span><strong>${activity.title}</strong></span>`;
        list.append(button);
      });
      group.append(list); picker.append(group);
    });
    const selected = config.activities.find(activity => safeId(activity.id) === activeId);
    if (selected) {
      const workspace = document.createElement("div"); workspace.className = "single-activity";
      workspace.append(renderActivity(selected)); activityRoot.append(workspace);
      picker.querySelector(`[data-target="${activeId}"]`)?.classList.add("selected");
    } else {
      const prompt = document.createElement("p");
      prompt.className = "choose-prompt";
      prompt.textContent = "Choose a challenge above when you are ready.";
      activityRoot.append(prompt);
    }
    picker.addEventListener("click", event => { const choice = event.target.closest(".activity-choice"); if (!choice) return; event.preventDefault(); location.hash = choice.dataset.target; renderAll(); document.querySelector("#activity-workspace").scrollIntoView({ behavior: "smooth", block: "start" }); }, { once: true });
    updateProgress();
  }

  function download(filename, content, type) {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([content], { type }));
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(link.href), 1000);
  }

  const studentName = document.querySelector("#student-name");
  if (studentName) {
    studentName.value = state.identity.name || "";
    studentName.addEventListener("input", event => { state.identity.name = event.target.value; queueSave(); });
  }

  const printRecord = document.querySelector("#print-record");
  if (printRecord) printRecord.addEventListener("click", () => { saveState(); window.print(); });

  const exportRecord = document.querySelector("#export-record");
  if (exportRecord) exportRecord.addEventListener("click", () => {
    saveState();
    const stamp = new Date().toISOString().slice(0, 10);
    download(`year-8-science-busy-work-${stamp}.json`, JSON.stringify(state, null, 2), "application/json");
  });

  const restoreRecord = document.querySelector("#restore-record");
  if (restoreRecord) restoreRecord.addEventListener("change", async event => {
    const file = event.target.files?.[0];
    if (!file) return;
    try {
      const restored = JSON.parse(await file.text());
      if (restored.buildId !== config.buildId || !restored.activities) throw new Error("This is not a current Year 8 Science Busy Work backup.");
      state = restored;
      localStorage.setItem(config.storageKey, JSON.stringify(state));
      if (studentName) studentName.value = state.identity?.name || "";
      renderAll();
      saveStatus.textContent = "Backup restored and saved on this device.";
    } catch (error) {
      saveStatus.textContent = error.message;
    } finally {
      event.target.value = "";
    }
  });

  renderAll();
  if (state.updatedAt) saveStatus.textContent = `Restored local answers saved ${new Date(state.updatedAt).toLocaleString()}`;
})();
