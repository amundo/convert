$(function(){


  window.Sentence = Backbone.Model.extend({
    initialize: function(){
      this.timestamp = new Date().getTime();
    }    
  });

  window.Sentences = Backbone.Collection.extend({

    model : Sentence,

    initialize: function(options){
      this.url = options.url;
      this.bind("reset", this.value_change);
    },

    value_change: function(){
      console.log('changed');
    }
  });

  window.NotebookView = Backbone.View.extend({

    el : $('#notebook') ,

    initialize : function(){
      _.bindAll(this, 'render');
    },

    render : function(){
        console.log(this.collection);
    }

  });

  function Notebook(options){

    //console.log(options.url);

    window.sentences = new Sentences({
      url: options.url 
    });

    window.notebookView = new NotebookView({
      collection: sentences
    });

    this.start = function(){
      notebookView.collection.fetch();
    };

  }

  window.notebook = new Notebook({
    'url': 'js/mandarin.js'
  });
  window.notebook.start();
  window.notebookView.render();
  
})
