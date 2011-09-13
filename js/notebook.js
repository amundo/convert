$(function(){


  window.Sentence = Backbone.Model.extend({
    initialize: function(){
      this.timestamp = new Date().getTime();
    }    
  });

  window.Sentences = Backbone.Collection.extend({
    url : 'js/mandarin.json',
    model : Sentence,
  });

  window.NotebookView = Backbone.View.extend({
    el : $('#notebook') ,

    initialize : function(){
      _.bindAll(this, 'render');
    },

    render : function(){
    }
  });

  function Notebook(){

    window.sentences = new Sentences({
      url: 'js/notebook.js'
    });

    window.notebookView = new NotebookView({
      collection: sentences
    });

    this.start = function(){
      sentences.reset();
      notebookView.render();
      //Backbone.history.start();
    };

  }

  window.notebook = new Notebook().start();

})
