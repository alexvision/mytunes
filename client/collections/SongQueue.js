// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function() {
  	this.on('queued', this.add(this.model), this);
  	console.log('blah');
  }

});