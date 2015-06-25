(function () {
    "use strict";

    function Snake() {
        var sound = 'hiss';

        this.getSound = function () {
            return sound;
        };
        return undefined;
    }

    Snake.prototype.speak = function () {
        return this.getSound() + '!!';
    };


    function Constrictor() {
        return undefined;
    }
    Constrictor.prototype = new Snake();
    Constrictor.prototype.constructor = Constrictor;

    Constrictor.prototype.constrict = function () {
        return 'the snake squeezes you to death';
    };


    function Venomous() {
        return undefined;
    }
    Venomous.prototype = new Snake();
    Venomous.prototype.constructor = Venomous;

    Venomous.prototype.invenomate = function () {
        return 'the snake bites you and the poison kills you';
    };


    var python = new Constrictor();

    var cobra = new Venomous();


    console.log('Python:\n' + python.speak() + '\n' + python.constrict());

    console.log('Cobra:\n' + cobra.speak() + '\n' + cobra.invenomate());

    try {
        console.log('Python invenomating: \n');
        python.invenomate();
    } catch (e) {
        console.log('A python cannot invenomate\n', e);
    }

    try {
        console.log('Cobra constricting: \n');
        cobra.constrict();
    } catch (e) {
        console.log('A cobra cannot constrict\n', e);
    }


}());