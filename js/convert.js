function convert(text, rules){
  rules.forEach(function(rule){
    var 
      before = rule[0], 
      after = rule[1];

    text = text.replace(before, after, 'g')
 
  })
  return text;
}

