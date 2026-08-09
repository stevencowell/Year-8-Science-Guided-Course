(()=>{
  const anchors={"M01-S01":"theory-m01-s01-data-sources","M01-S02":"theory-m01-s02-scientific-questions","M01-S03":"theory-m01-s03-representing-data","M02-S01":"theory-m02-s01-levels-of-organisation","M02-S02":"theory-m02-s02-plant-organs","M02-S03":"theory-m02-s03-ecosystem-relationships","M03-S01":"theory-m03-s01-classifying-matter","M03-S02":"theory-m03-s02-atomic-structure","M03-S03":"theory-m03-s03-symbols-and-atomic-number","M04-S01":"theory-m04-s01-systems-and-stores","M04-S02":"theory-m04-s02-physical-and-chemical-change","M04-S03":"theory-m04-s03-geological-change-rock-cycle","M05-S01":"theory-m05-s01-model-purpose-components","M05-S02":"theory-m05-s02-simulation-components","M05-S03":"theory-m05-s03-question-and-evidence"};
  const setText=(element,value)=>{if(element.textContent!==value)element.textContent=value};
  const wire=()=>{
    document.querySelectorAll('[data-activity-id]').forEach(card=>{
      const section=(card.querySelector('.section-code')?.textContent.match(/M\d\d-S\d\d/i)||[])[0]?.toUpperCase();
      if(!section)return;
      card.id='bw-'+section.toLowerCase();
      const link=card.querySelector('.theory-link');
      if(link&&anchors[section]){
        link.href='/Year-8-Science-Guided-Course/theory.html#'+anchors[section];
        setText(link,'Open supporting theory');
        link.removeAttribute('aria-disabled');
        link.classList.remove('is-pending');
      }
    });
    document.querySelectorAll('#clips article').forEach(card=>{
      const section=(card.querySelector('.code')?.textContent.match(/M\d\d-S\d\d/i)||[])[0]?.toUpperCase();
      if(!section)return;
      card.id='video-'+section.toLowerCase();
      const link=card.querySelector('.theory');
      if(link&&anchors[section]){
        link.href='/Year-8-Science-Guided-Course/theory.html#'+anchors[section];
        setText(link,'Open supporting theory for '+section);
        link.removeAttribute('aria-disabled');
        link.classList.remove('pending');
      }
    });
    document.querySelectorAll('.record[data-section]').forEach(record=>{
      const section=record.dataset.section?.toUpperCase();
      if(section)record.id='folio-'+section.toLowerCase();
    });
  };
  const observerOptions={childList:true,subtree:true};
  const observer=new MutationObserver(()=>{
    observer.disconnect();
    wire();
    observer.observe(document.body,observerOptions);
  });
  wire();
  if(!document.querySelector('[data-course-home]')){
    const home=document.createElement('p');
    home.dataset.courseHome='';
    home.innerHTML='<a href="/Year-8-Science-Guided-Course/">&larr; Course home</a>';
    document.querySelector('main')?.prepend(home);
  }
  observer.observe(document.body,observerOptions);
})();
