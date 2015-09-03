// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

	//listens for queue event to fire from song model
  initialize: function() {
  	// this.on('enqueue', this.add(this.model), this);
  }

});