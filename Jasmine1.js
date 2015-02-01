describe ("Suite", function(){  //Suite is what we're testing
	var calculator;

	beforeEach(function(){

	calculator = new Calculator();
	
		});

	afterEach(function(){

	});

		it("should be able to add 2 numbers.", function(){
				var result = calcuator.add(2,3);

				expect(result).toEqual(5);
		});


		it("should be called with the right arguments.", function(){
				spyOn(calculator, "add");

				calculator.add(2,5);

				expect(calculator.add).toHaveBeenCalled();


		});


});