var SongView = Backbone.View.extend({

	tagName: "span",

	className: "song",

	id: "1234",

	attributes: 
			"date-genre": "Jazz"

	render: function() {
			this.$el.html("Hello World");

			return this;

	}


});

var songView = new SongView();

//songView.render();

//$("#container").html(songView.$el);

$("#container").html(songView.render().$el);