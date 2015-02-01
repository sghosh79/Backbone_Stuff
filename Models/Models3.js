/* Validation --> every song needs a title */

var Song = Backbone.Model.extend({
	validate: function(attrs){
		if(!attrs.title)
			return "Title is required";
	}
});

var song = new Song(); //would be invalid bc we did not set a title when instantiating the song

song.isValid()

var lastError = song.validationError;

song.set("title", "Blue is Green")


/* Inheritance */
var Animal = Backbone.Model.extend({
	walk: function(){ 
		console.log("Animal walking...");

	}
	
});


var Dog = Animal.extend({
	walk: function(){ // w this code if you call walk function on the dog, the implementation w/in the dog class will be executed
		console.log("Dog walking...");

	}
	
});


var dog = new Dog();

dog.walk();


/* What if we want to call the walk method in the base class? In C# or JAVA, you can use the keyword base or super */

var Animal = Backbone.Model.extend({
	walk: function(){ 
		console.log("Animal walking...");

	}
	
});


var Dog = Animal.extend({
	walk: function(){ 

		Animal.prototype.walk.apply(this);

		console.log("Dog walking...");

	}
	
});

var dog = new Dog();

dog.walk();