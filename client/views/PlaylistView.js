var PlaylistView = Backbone.View.extend({

  tagName: "table",
  className: "playlist",

  template: _.template('<th><%- name %></th><td><button class="enqueue">Play</button></td>'),

  initialize: function() {
  	this.render();
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    var name = this.model.get("name");
    return this.$el.html(this.template(this.model.attributes))
    // .append(
    //   this.collection.map(function(song) {
    //     return new PlaylistEntryView({model: song}).render();
    //   })
    // );
  } 

});