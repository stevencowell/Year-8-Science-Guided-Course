(() => {
  const section = document.getElementById('section-m03-s03');
  const firstBlock = section?.querySelector('section:not([id^="check-"]):not([id^="response-"])');
  if (!section || !firstBlock || section.querySelector('.periodic-reference')) return;
  const reference = document.createElement('figure');
  reference.className = 'periodic-reference';
  reference.innerHTML = '<img src="/Year-8-Science-Guided-Course/assets/diagrams/vg-m03-s03-01-first-18-elements.svg" alt="Reference table showing the first 18 elements, their atomic numbers and symbols, arranged by period and group."><figcaption><strong>Keep this reference nearby.</strong> Use the first 18 elements to check atomic number, symbol, period and group as you work.</figcaption>';
  firstBlock.after(reference);
})();
