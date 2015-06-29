(function () {
    "use strict";

    function Snake(name) {
        var sound = 'Hiss';
        

        this.getSound = function () {
            return sound;
        };
        this.getName = function getName(){
            return this.name;
        };
        return undefined;
    }

    Snake.prototype.speak = function () {
        return this.getSound() + '!!';
    };


    function Constrictor(name) {
        this.name = name;
        return undefined;
    }
    Constrictor.prototype = new Snake();
    Constrictor.prototype.constructor = Constrictor;

    Constrictor.prototype.constrict = function () {
        return 'The ' + this.getName().toLowerCase() + ' squeezes you to death!';
    };


    function Venomous(name) {
        this.name = name;
        return undefined;
    }
    Venomous.prototype = new Snake();
    Venomous.prototype.constructor = Venomous;

    Venomous.prototype.invenomate = function () {
        return 'The ' + this.getName().toLowerCase() + ' bites you and the poison kills you!';
    };


    var python = new Constrictor('Python');

    var cobra = new Venomous('Cobra');


    console.log('From the base class both can \'speak\' using a shared method and shared private variable');
    console.log(python.name + ':\n' + python.speak());

    console.log(cobra.name + ':\n' + cobra.speak());

    console.log('They have access to their sub-class methods: \n');
    console.log(python.name + ':\n' + python.constrict());

    console.log(cobra.name + ':\n' + cobra.invenomate());

    console.log('...but not to each others: \n');
    try {
        console.log(python.name + ' invenomating: \n');
        python.invenomate();
    } catch (e) {
        console.log('A python cannot invenomate\n', e);
    }

    try {
        console.log(cobra.name + ' constricting: \n');
        cobra.constrict();
    } catch (err) {
        console.log('A cobra cannot constrict\n', err);
    }


}());