// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  className: 'queue',

  initialize: function() {
  	this.render();
  	//this.model.on('enqueue', addElement)
  },

  render: function() {
  	this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  addElement: function(song){
  	this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append( new SongQueueEntryView({model: song}).render() );
  }

});
