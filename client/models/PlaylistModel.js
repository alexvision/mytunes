var PlaylistModel = Backbone.Model.extend({
	
	initialize: function(name) {
		this.set('name', name);
		this.set('collection', new Playlist());
	}
})