#######################################
Binding and Triggering Custom Events
#######################################

var person = {
	walk: function(){
		this.trigger("walking", {speed: 10});
	}
};

_.extend(person, Backbone.Events);

person.on("walking", function(e) {
	console.log(e.speed);

});

person.off("walking");