(function(){

var Snake = {};

Snake.sound = 'hiss';
Snake.speak = function(){
	return this.sound + '!!'
};

var Constrictor = Object.create(Snake);
Constrictor.constrict = function(){
	return 'the snake squeezes you to death';
};

var Venomous = Object.create(Snake);
Venomous.invenomate = function(){
	return 'the snake bites you and the poison kills you';
};


var python = Object.create(Constrictor);

var cobra = Object.create(Venomous);


console.log('Python:\n' + python.speak() + '\n' + python.constrict());

console.log('Cobra:\n' + cobra.speak() + '\n' + cobra.invenomate());

try{
	console.log('Python invenomating: \n');
	python.invenomate();
} catch(e){
	console.log('A python cannot invenomate\n', e);

	try{
		console.log('Cobra constricting: \n');
		cobra.constrict();
	} catch(e){
		console.log('A cobra cannot constrict\n', e);
	}

}
}());