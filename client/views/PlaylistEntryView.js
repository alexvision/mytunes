var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  initialize: function() {
    this.model.on('ended', this.render, this)
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button class="remove">Remove from Playlist</button></td>'),

  events: {

    //plays and queues on click
    'click .enqueue': function() {
      this.model.enqueue();
    },

    'click .play': function() { 
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
