$(function(){


  window.Sentence = Backbone.Model.extend({
    initialize: function(){
      console.log(this.toJSON());
    }    
  });

  window.Text = Backbone.Collection.extend({

    model : Sentence,

    initialize: function(stuff, options){
      this.url = options.url;
    }
    
  });

  window.SentenceView = Backbone.View.extend({

    initialize : function(){
      _.bindAll(this, 'render');
      this.template = _.template($('#sentence_template').html());
    },

    render : function(){
console.log('inrender');
      var rendered = this.template(this.model.toJSON());
      $(this.el).html(rendered);
      return this;
    }

  })

  window.TextView = Backbone.View.extend({

    el : $('#notebook') ,

    initialize : function(){
      _.bindAll(this, 'render');
    },

    render : function(){
      _.each(this.collection, function(sentence) { 
        var view = new SentenceView({model: sentence});
        this.$('ol').append(view.render().el);
      }) ;
      $(this.el).appendTo('body');
      return this;
    }

  });

  function Notebook(params){

    this.text = new Text({}, {
      url: params.url 
    });

    this.textView = new TextView({
      collection: this.text
    });

    this.start = function(){
      this.textView.collection.fetch();
      $('body').append(this.textView.render().el);
    };

  }

  window.notebook = new Notebook({
    'url': 'js/mandarin.js'
  });

  window.notebook.start();
  
})
