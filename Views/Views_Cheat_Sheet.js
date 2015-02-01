#######################################
Creating Views
#######################################

var SongView = Backbone.View.extend({

	tagName: “span”,

	className: “song”,
	
	id: “1234”,
	
	attributes: {
	 “data-genre”: “Jazz”
},

render: function() {
	 this.$el.html(…);
	 return this;
	}
});

var songView = new SongView();
$(“#container”).html(songView.render().$el);


#######################################
Passing Data to Views
#######################################

var song = new Song({…});
var songView = new SongView({ model: song });

var SongView = Backbone.View.extend({

render: function() {
	 this.$el.html(this.model.get(“title”));
	 return this;
		}
});

#######################################
Handling DOM Events
#######################################

var SongView = Backbone.View.extend({

		events: {
 			“click .bookmark”: “onClickBookmark”
		},

		onClickBookmark: function(e){
			 	var $targetElement = $(e.target);
  			…
	}

});

#######################################
Handling Model Events
#######################################

var SongView = Backbone.View.extend({
	
	initialize: function(){
		 this.model.on(“change”, this.render, this);
	}
});

#######################################
Handling Collection Events
#######################################

var SongView = Backbone.View.extend({
	
	initialize: function(){
		 this.model.on(“add”, this.add, this);
	}
	
	add: function(model) {
 			 …
		}
});

#######################################
Templating
#######################################

var SongView = Backbone.View.extend({

	render: function(){
  	var source = $(“#songTemplate”).html();
		var template = _.template(source);

	  this.$el.html(template(this.model.toJSON());

	  return this;
		} 
});

<script type=“text/html” id=“songTemplate”>
		<%= title %>
		<% if (downloads > 1000) { %>
			  Popular
		<% } %>
</script>








