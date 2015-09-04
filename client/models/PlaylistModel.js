var PlaylistModel = Backbone.Model.extend({
	
	initialize: function(name) {
		this.set('name', name);
		this.set('chosen', false)
		this.set('collection', new Playlist());
	},

	chosen: function() {
		console.log(this);
		this.set('chosen', true);
		this.trigger('chosen', this);
	}
})