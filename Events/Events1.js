var person = {
	name: "Mosh",

	walk: function(){
		this.trigger("walking", { //trigger method to publish events
			speed: 1,
			startTime: "08:00"	
	
			});
	}
};

_.extend(person, Backbone.Events);

//person.once("walking", function(e){
person.on("walking", function(e){ //on method to subscribe to events
	console.log("Person is walking");
	console.log("Event Args", e)
});

person.off("walking"); //off method to unsubscribe from events

person.walk();