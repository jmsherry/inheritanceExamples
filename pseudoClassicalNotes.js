// constructor function
function MyClass () {
  var privateVariable; // private member only available within the constructor fn

  this.privilegedMethod = function () { // it can access private members
    //..
  };
}

// A 'static method', it's just like a normal function
// it has no relation with any 'MyClass' object instance  
// See (http://blog.anselmbradford.com/2009/04/09/object-oriented-javascript-tip-creating-static-methods-instance-methods/)
MyClass.staticMethod = function () {};

MyClass.prototype.publicMethod = function () {
  // the 'this' keyword refers to the object instance
  // you can access only 'privileged' and 'public' members
};

var myObj = new MyClass(); // new object instance produced here!

myObj.publicMethod();
MyClass.staticMethod();

// From http://stackoverflow.com/questions/1635116/javascript-class-method-vs-class-prototype-method

// See also: https://developers.google.com/speed/articles/optimizing-javascript for method efficiency.
