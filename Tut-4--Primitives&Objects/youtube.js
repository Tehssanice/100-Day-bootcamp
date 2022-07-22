// Categories: Primitive and Objects

//Primitives: There are 6 primitive data types, which are string, number, boolean, null, undefined, symbol
// Primitives are immutable

{
  let x = 5;
  let b = "10";

  x = x + b;
  console.log(x);
}

// Objects
let person = { // person is an object, and it has properties/members in it like name, age e.t.c.
  name: "Dubem",
  age: 20,
  favFood: "rice",
  fun: function () { //a function can be a property when it is inside an object
    console.log('yay!');
  }
}

person.fun();
person.age
// Primitives do not have methods, but objects do.
// You can access the members of an object using the dot(.) operator.  You can do this by selecting the name of the object.property 
// If it is a method you use (), but if it is a property, there will be no need for a ().  

let now = new Date();

let grades = [10, 20, 30, 40];

{
  let myName = "Theresa";
  myName = myName.toUpperCase();
  console.log(myName);
}

{
  let myName = "Theresa";
  let yourName = new String("Dubem");
  console.log(typeof (myName));
  console.log(typeof (yourName));
}

// NUMBER DATA TYPE
{
  let x = 5;
  // x = 5.5;
  console.log(Number.isSafeInteger(x));
}

{
  let babies = 90074773656991;
  console.log(Math.pow(-babies, 201) * 2)
  console.log(console.log() + 2);
  console.log(1/0);
}