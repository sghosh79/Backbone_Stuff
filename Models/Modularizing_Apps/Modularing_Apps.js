//main.js code that was modularized

// var Song = Backbone.Model.extend();

// var SongView = Backbone.View.extend({
// 	 	render: function(){
// 			this.$el.html(this.model.get("title"));


// 				return this;
// 	}
// });

// var song = new Song({ title: "Blue in Green" });

// var songView = new SongView({ el: "#container", model: song });
// songView.render();


require.config({
	paths: {
			jquery: 'lib/jquery-min',
			underscore: 'lib/underscore-min',
			backbone: 'lib/backbone-min'

	}

})


define(['app'], function(App){
	App.initialize();
});