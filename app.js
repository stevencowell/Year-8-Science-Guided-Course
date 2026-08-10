document.querySelectorAll('textarea[data-storage-key]').forEach(area=>{
  const key=area.dataset.storageKey;
  area.value=localStorage.getItem(key)||'';
  area.addEventListener('input',()=>localStorage.setItem(key,area.value));
});

document.querySelectorAll('.check-answer').forEach(button=>button.addEventListener('click',()=>{
  const selected=document.querySelector('input[name="'+CSS.escape(button.dataset.name)+'"]:checked');
  const feedback=button.nextElementSibling;
  if(!selected){feedback.textContent='Choose one response first.';return;}
  feedback.textContent=Number(selected.value)===Number(button.dataset.correct)?'Correct. '+button.dataset.rationale:'Not yet. Re-read the theory directly above and try again.';
}));

document.querySelectorAll('[data-student-key]').forEach(input=>{
  const key=input.dataset.studentKey;
  input.value=localStorage.getItem(key)||'';
  input.addEventListener('input',()=>localStorage.setItem(key,input.value));
});

document.querySelectorAll('[data-print-page]').forEach(button=>button.addEventListener('click',()=>window.print()));

// A help link takes a student to the exact theory they need, then offers one clear way back.
const helpReturnKey='year-8-science:theory-help-return:v1';
const showHelpReturn=()=>{
  const returnId=sessionStorage.getItem(helpReturnKey);
  const targetId=window.location.hash.slice(1);
  const target=document.getElementById(targetId);
  if(!returnId||!target||!targetId.startsWith('theory-')||target.querySelector('.help-return-button')) return;
  const button=document.createElement('button');
  button.type='button';
  button.className='help-return-button';
  button.textContent='← Return to your question';
  button.addEventListener('click',()=>{
    const question=document.getElementById(returnId);
    sessionStorage.removeItem(helpReturnKey);
    button.remove();
    if(question){
      history.replaceState(null,'','#'+returnId);
      question.scrollIntoView({behavior:'smooth',block:'start'});
      question.querySelector('textarea, input, button')?.focus({preventScroll:true});
    }
  });
  target.append(button);
};

document.querySelectorAll('section[id^="response-"] a[href^="#theory-"]').forEach(link=>link.addEventListener('click',()=>{
  const response=link.closest('section[id^="response-"]');
  if(response) sessionStorage.setItem(helpReturnKey,response.id);
  window.setTimeout(showHelpReturn,0);
}));
window.addEventListener('hashchange',showHelpReturn);
showHelpReturn();
