(function() {

  $(function() {
    return $('textarea').autogrow();
    /*
      example: 
        sentence: "Me llamo Martín"
        translation: "My name is Martin"
      
        words: [
            word: "Me"
            analysis: [
              morph: "me"
              gloss: "1S.REFL"
            ]
          ,
            word: "llamo"
            analysis: [
              morph: "llam-"
              gloss: "to.call"
            ,
              morph: "-o"
              gloss :[
                'first person'
                'singular'
                'present' 
              ]
            ]
        ]
    */
  });

}).call(this);
