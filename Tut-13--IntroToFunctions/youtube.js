{
  let name = 'Dubem';
  function capRice(name) {
    name = "Hey you"
  }
  console.log(name);
  console.log(capRice);

}

// {
//   function times(answer) {
//     return answer();
//   }

//   let myFunc = (answer) = 5 * 5
//   let me = times(myFunc);
// }

// {
//   let pie = prompt();
//   if (pie === "jump") {
//     console.log('yes, come in');
//   }
//   else {
//     console.log('please leave');
//   }
// }

{
  //FUNCTION DECLARATION
  function pow(x, y) {
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }
  console.log(pow(3, 3));


  //FUNCTIONS AS FIRST CLASS CITIZENS
  //Adding a function to an array
  let coolFunctions = [pow];
  console.log(coolFunctions[0](3, 3));

  //Adding a function to an object as a property. This is also known as methods
  let mathFunctions = {
    power: pow
  };

  console.log(mathFunctions.power(3, 3));

  //Adding properties to a function
  pow.description = " Will raise numbers to a power ";

  console.log(pow.description);

  //Passing a function to a parameter/passing a function as an argument
  function callbackExample(callback) {
    return callback(3, 5);
  }

  console.log(callbackExample(pow));

  //Return a function from a function

  function returnAFunction() {
    return pow;
  }

  console.log(returnAFunction()(10, 3));




  //OR OR OR
  //FUNCTION EXPRESSION/AASIGNING A FUNCTION TO A VARIABLE
  let myFunc = function (x, y) {
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }
  console.log(myFunc(3, 3));

}

{
  function doStuff() {
    console.log("hey");
  }
  doStuff();
}

//MEMEOIZATION AND ALGORITHM OPTIMIZATION
{
  pow.calculated = {};
  function pow(x, y) {
    let stringVersion = x + "^" + y;
    console.log("string version:" + stringVersion);

    if (stringVersion in pow.calculated) {
      console.log("found!");
      return pow.calculated[stringVersion]
    }

    console.log("CALCULATING!")

    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    // pow.calculated.push(total);
    pow.calculated[stringVersion] = total;
    console.log(pow.calculated);
    return total;
  }

  pow(3, 3);
  pow(3, 3);
  pow(10, 5);
  pow(10, 5);

}

//DEFAULT PARAMETERS & IMPLICIT PARAMETERS
{
  function pow(x, y) {
    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  console.log(pow());
  console.log(pow(1, 2, 3, 4, 5));
  console.log(pow(4, 2, 5, 6, 7));


  //How to deal with less parameters in arguments
  function pow(x, y = 2) {

    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  console.log(pow(3));//less parameter

  //OR
  function pow(x, y) {
    if (y === undefined) { y = 2 }

    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  console.log(pow(3));


  //OR
  function pow(x, y) {
    y = typeof y === "undefined" ? 2 : y;

    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  console.log(pow(3));

  //Dealing with multiple parameters
  function pow(x, y, ...extra) {
    console.log(extra);

    let total = 1;
    for (let i = 0; i < y; i++) {
      total *= x;
    }
    return total;
  }

  console.log(pow(3, 3, 4, 6, 7, 8));//multiple parameters

  //Functions with unlimited arguments
  function largest(x, ...extra) {
    let largest = x;
    for (let i = 0; i < extra.length; i++) {
      if (extra[i] > largest) {
        largest = extra[i];
      }
    }
    return largest;
  }
  console.log(largest(30, 23, 56, 12, 66))

  //IMPLICIT PARAMETERS: behind the scene
document.write("Implicit parameters include [this], [arguments]")
} 