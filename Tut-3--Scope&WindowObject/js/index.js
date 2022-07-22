(function () {
  //IIFE: Immediately Invoked Function Expression
  var age = 5;
})();

// the IIFE is used to cover our variables from being exposed in the window. It protects variables from showing on the window object when typed in on the console in the browser.

// without the (var), age is created as a window object. Meaning if you type it in the console, it will be visible.

let Z = 10;

// a BLOCK is anytime we have a set of curly braces{}. It restricts our variables inside the curly braces, and using let protects it from becoming a global variable. it can not be  seen when typed on the console.
{
  //block
  let y = 15;
  const A = 25;
  console.log(y,A);
}
// const does not let you change its variables

{
  //block
  var y = 25;
}
// the block fails to protect our variable when we use (var)