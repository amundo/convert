$(function(){


  window.Sentence = Backbone.Model.extend({
    initialize: function(){
    }    
  });

  window.Sentences = Backbone.Collection.extend({

    model : Sentence,

    initialize: function(options){
      //this.options = options || {};
      //if (this.options.url) this.url = this.options.url;

      this.url = options.url;
      //this.template = _.template($('#sentence_template').html());
    }
    
  });

  window.SentenceView = Backbone.View.extend({
    model: Sentence,

    initialize : function(){
      _.bindAll(this, 'render');
    },

    render : function(){
    }
  })

  window.NotebookView = Backbone.View.extend({

    el : $('#notebook') ,

    initialize : function(){
      _.bindAll(this, 'render');
    },

    render : function(){
      _(this.collection.models).each(function(sentence) { 
        var view = new SentenceView(sentence);
        this.$('ol').append(view.render());
      }) ;
      return this;
    }

  });

  function Notebook(options){

    window.sentences = new Sentences({
      url: options.url 
    });

    window.notebookView = new NotebookView({
      collection: sentences
    });

    this.start = function(){
      $('body').append(window.notebookView.render().el);
      window.notebookView.collection.fetch();
    };

  }

  window.notebook = new Notebook({
    'url': 'js/mandarin.js'
  });

  window.notebook.start();
console.log(window.notebookView.collection.models);
  
})
