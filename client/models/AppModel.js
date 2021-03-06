// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({


  initialize: function(params) {

    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('playlists', new Playlists());
    this.set('queueList', 0);

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    //Add to the queue
    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
      if(!this.get('currentSong').attributes.artist){
        this.get('songQueue').playFirst();
      }
      this.set('queueList', this.get('queueList') + 1);
    }, this);

    //Remove from the queue
    params.library.on('dequeue', function(song){
      if(this.get('currentSong') === song){
         this.get('songQueue').playFirst();
      }
      this.get('songQueue').remove(song);
      this.set('queueList', this.get('queueList') - 1);
    }, this);

    params.library.on('ended', function(song) {
      this.get('songQueue').remove(song);
      this.get('songQueue').playFirst();

      this.set('queueList', this.get('queueList') - 1);
    }, this);

    params.library.on('addMe', function(song) {
      var lists = this.get('playlists');

      lists.each(function(playlist){
        if(playlist.get('chosen') === true){
          playlist.collection.add(song);
        }
      })
    }, this)

  }

});
