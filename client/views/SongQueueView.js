// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',
  className: 'queue',

  initialize: function() {
  	this.render();
  },

  render: function() {
  	this.$el.children().detach();

  	var list = this.collection.map(function(song) {
  		return new SongQueueEntryView({model: song}).render();
  	})

    this.$el.html('<th>Queue</th>').append(list);
  }

});
