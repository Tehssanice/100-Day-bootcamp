//This is an implicit argument that's passded to the function.

document.write(" Four ways of creating functions and invoking them, and what the value of 'THIS' will be. And they are as follows:")
{
  let me = {
    name: "Dubem",
    outPutMe: function () {
      console.log(this);
      console.log(this.name);
    }
  }
  me.outPutMe(); // method


  function outPutMe() {
    console.log(this);
  }

  outPutMe(); // function


  function outPutMeStrict() {
    'use strict'
    console.log(this);
  }

  outPutMeStrict(); // function in strict mode

  function Person() {//(constructor bc it has a capital P)
    console.log(this);
    this.name = "Tessa";
    console.log(this);
  }

  let person = new Person();//constructor by usingthe 'new' keyword
  console.log(person);

}

//CALL, APPLY AND BIND
{
  function doStuff(input, input2) {
    console.log(input, input2);
    console.log(this);

  }

  doStuff(5);
  doStuff.call("hello", 5, 10);
  doStuff.apply("hello", [5, 10]);
  //apply is differnt from call bc it is created from an array. It can only work with arrays.

  let args = [5, 10];
  doStuff.apply("hello", args);

  let me = { name: "DubemmT" };
  let newFunction =
    doStuff.bind("me", 5, 10);

  newFunction();

}

//ARROW FUNCTIONS
{
  function cube(x) {
    return x * x * x;
  }

  let cubeArrow = x => x * x * x;

  console.log(cube(5));
  console.log(cubeArrow(5));

  //E.g
  let mathArrow = () => 6 * 6;// parenthesis after mathArrow are compulsory when there is nothing in them, or when the value is more than one, but optional when it has just one value.
  console.log(mathArrow());

  //OR

  let multArrow = y => y / y * y;//The parenthesis was optional here.
  console.log(multArrow(11));

  //E.g
  let kingArrow = (x, y) => (x * y) / y;// The parenthesis after kingArrow was compulsory here bc it has more than one value
  console.log(kingArrow(2, 11));

  //E.g
  function live(z, a) {
    return (z * a) - (z / a);
  }

  let code = (z, a) => {return (z * a) - (z / a)};//When there is curly braces after the arrow, then we must add 'return' in order to get an answer, else we will get undefined.

  console.log(live(10, 2));
  console.log(code(15, 3));

}

//THIS with Arrow Function
{
  let arrow = () => this;
  function normal() {
    return this;
  }

  console.log(arrow());
  console.log(normal());

  let functions = {// This is an object
    arrow : arrow,
    normal: normal
  };

  console.log(functions.normal());// this is a method
  console.log(functions.arrow());

} 

//BIND WITH ARROW FUNCTION
 {
  function normal() {//[check down and then come back]. but you can use a normal function and then use the 'BIND' method.
    return this;
  }

  let arrow = () => this;
  console.log(arrow());

  let newFunc = arrow.bind("hello");// You can not change the value of 'THIS' for arrow functions using bind,
  console.log(newFunc());

  console.log(normal.bind("this")());
 }