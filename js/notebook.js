$(function(){

  var data = null;
  $.getJSON('js/subfile.json', function(resp){
    storeRules(resp);
  })

  function storeRules(data){
    $('#rules').data('rules', data);
    $.each(data, function(i, datum){
      $('#rules').append('<strong>'+datum[0]+'</strong>  <span>'+datum[1]+'</span>');
    })
  }

  function convert(text){
    var rules = $('#rules').data('rules');

    rules.sort(function(a,b){ return b[0].length < a[0].length ? -1 : 1; });

    $.each(rules, function(i, rule){
      var beforeRE = new RegExp(rule[0], 'g'),
          after = rule[1];

      text = text.replace(beforeRE, after);

    })
    return text;
  }

  $('#plain').keyup(function(){

    var before = $('#plain').attr('value');
    var after = convert(before);
    $('#transliterated').attr('value', after);

  })

})
