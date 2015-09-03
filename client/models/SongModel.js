// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount', this.get('playCount') + 1);
  },

  enqueue: function() {
  	this.trigger('enqueue', this);
  },

  dequeue: function() {
  	this.trigger('dequeue', this);
  },

  ended: function() {
  	this.trigger('ended', this);
  }
});
