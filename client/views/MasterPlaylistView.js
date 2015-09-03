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
			var playlistName = this.$el.find('.playlistName').val()
			if (playlistName.length > 0) {
				this.createPlaylist(playlistName);
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

	createPlaylist: function(playlistName) {
		var found = false;
		this.collection.each(function(playlist) {  
			if (playlistName === playlist.get('name')) {
				found = true;
			}
		});
		if (!found) {		
			var newPlaylist = new PlaylistModel(playlistName);
			this.collection.add(newPlaylist);
			var playlistView = new PlaylistView({model: newPlaylist});
			this.$el.append(playlistView.render());
		}
	}

})