window.app = {};

var 
  ruleList = document.querySelector('#rules'),
  search = document.querySelector('#searchRules'),
  beforeTA = document.querySelector('#before'),
  afterTA  = document.querySelector('#after');

var listen = () => { 
  beforeTA.addEventListener('keyup', () => {
    afterTA.value = convert(beforeTA.value);
  });

  beforeTA.addEventListener('keyup', ev => {
    if(ev.which == 27){ copyOver(); }
  })

  search.addEventListener('keyup', ev => {
    filterRules(ev.target.value.trim())
  })
}

var filterRules = query => {
  var ruleLis = [... ruleList.querySelectorAll('li')];

  ruleLis
   .forEach(li => li.style.display = 'none');

  ruleLis
   .filter(li => li.textContent.match(query))
   .forEach(li => li.style.display = 'block')
}
  

var copyOver = () => beforeTA.value = afterTA.value; 

var sortRulesByLength = rules => {
  rules.sort((a,b) => { return b[0].length < a[0].length ? -1 : 1; });
  return rules; 
}

var renderRules = () => {
  app.rules.forEach(rule => {
    var [code, letter] = rule;

    code = rule[0].replace(/[{}]/g, '');

    var html = `<li class=rule><kbd>${letter}</kbd> <output>${code}</output></li>`;
   
    ruleList.insertAdjacentHTML('beforeend', html);
  })
  return rules;
}

var convert = text => {
  app.rules.forEach((rule, i) => {
    var [before,after] = rule;
    text = text.replace(before, after, 'g');
  })
  return text;
}


fetch('js/subfile.json')
  .then(response => response.json()) 
  .then(rules => { app.rules = rules; return rules })
  .then(sortRulesByLength)
  .then(rules => { renderRules(rules); return rules })
  //.then(data => { console.log(data); return data})
  .then(rules => listen(rules));
