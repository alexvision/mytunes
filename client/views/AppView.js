// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')})
    

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this)

    // console.log(params)
    // params.model.on('enqueue', function(song) {
    //   this.queueView.addElement(song)
    // }, this)

    // this.model.on('change:songQueue', function(model) {
    //   console.log(this.get('songQueue.length'));
    //   this.set('queueView', new SongQueueView({collection: this.get('songQueue')}));

    // })
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.queueView.$el
    ]);
  }

});
