var setAge = function (newAge) {
    this.age = newAge;
};
var bob = new Object();
bob.age = 30;

console.log(bob.age);

bob.setAge = setAge;
bob.setAge(50);

console.log(bob.age);
var susan = new Object();
susan.age = 25;
console.log(susan.age);

susan.setAge = setAge;

susan.setAge(35);
console.log(susan.age);

var susan = new Object();



