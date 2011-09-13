$(function(){


  window.Sentence = Backbone.Model.extend({
    initialize: function(){
    }    
  });

  window.Sentences = Backbone.Collection.extend({

    model : Sentence,

    initialize: function(options){
      this.url = options.url;
    }
    
  });

  window.SentenceView = Backbone.View.extend({

    initialize : function(){
      _.bindAll(this, 'render');
      this.template = _.template($('#sentence_template').html());
    },

    render : function(){
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    }

  })

  window.NotebookView = Backbone.View.extend({

    el : $('#notebook') ,

    initialize : function(){
      _.bindAll(this, 'render');
    },

    render : function(){
      this.collection.each(function(sentence) { 
        var view = new SentenceView({model: sentence});
        this.$('ol').append(view.render().el);
      }) ;
      $(this.el).appendTo('body');
      return this;
    }

  });

  function Notebook(options){

    this.sentences = new Sentences({
      url: options.url 
    });

    this.notebookView = new NotebookView({
      collection: this.sentences
    });

    this.start = function(){
      this.notebookView.collection.fetch();
      $('body').append(this.notebookView.render().el);
    };

  }

  window.notebook = new Notebook({
    'url': 'js/mandarin.js'
  });

  window.notebook.start();
  
})
