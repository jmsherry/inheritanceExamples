(function () {

    "use strict";

    var Snake = {};

    Snake.sound = 'Hiss';
    Snake.speak = function () {
        return this.sound + '!!';
    };

    var Constrictor = Object.create(Snake);
    Constrictor.constrict = function () {
        return 'The ' + this.name.toLowerCase() +' squeezes you to death!';
    };

    var Venomous = Object.create(Snake);
    Venomous.invenomate = function () {
        return 'The ' + this.name.toLowerCase() +' bites you and the poison kills you!';
    };


    var python = Object.create(Constrictor);
    python.name = 'Python';

    var cobra = Object.create(Venomous);
    cobra.name = 'Cobra';

    console.log('From the base class both can \'speak\' using a shared method and shared instance variable');
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
