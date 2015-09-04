var PlaylistView = Backbone.View.extend({

  tagName: "table",
  className: "playlist",

  template: _.template('<th class="plHeader"><%- name %></th><td><button class="enqueue">Play</button></td>'),

  initialize: function() {
  	this.render();
  	this.model.on('chosen', this.choose, this);
  	this.model.on('', this.render, this);
  },

  events: {
  	'click .plHeader': function() {
  		console.log(this.model);
  		this.model.chosen();
  	}
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    var name = this.model.get("name");
        console.log('rendering');

    return this.$el.html(this.template(this.model.attributes)).append(
 		this.model.get('collection').map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  },

  choose: function() {
  	this.$el.toggleClass('selected')
  },

  deselectSelf: function() {
  	this.$el.removeClass('selected');
  }

});