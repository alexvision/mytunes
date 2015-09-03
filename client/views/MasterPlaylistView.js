var MasterPlaylistView = Backbone.View.extend({
	tagName: 'table',
	className: 'MasterPlaylist',

	template: _.template('<th>Playlists</th> \
							<td><input type="text" class="playlistName"> \
								<input type="submit" class="submitPlaylist"> \
							</td>'),

	initialize: function(){
		this.render();
	},

	events: {
		'click .submitPlaylist': function() {
			if (this.$el.find('.playlistName').val().length > 0) {

			}
		}
	},

	render: function(){
		this.$el.html(this.template).append(
			this.collection.map(function(playlist){
				return new PlaylistView({collection: playlist}).render();
			})
		);
	},

	createPlaylist: function() {
		var newPlaylist = new Playlist();
		this.$el.append(new PlaylistView({collection: newPlaylist}).render());
	}

})