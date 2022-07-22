//There are two ways to call number methods
{
  // Number.parseInt
  let x = 51;
  let y = 10;
  console.log(x + y);
}

{
  let x = 15;
  let y = 25;
  console.log(x + y);
}

var x = parseInt(10);
var y = parseInt(17);
console.log(x + y);

//HEXADECIMAL, OCTADECIMAL, BINARY

{
  var input = prompt("Put a number in");

  console.log("decimal  :", input);
  console.log("Binary   :", Number.parseInt(input, 2));
  console.log("Octal    :", Number.parseInt(input, 8));
  console.log("Hex      :", Number.parseInt(input, 16));
}

{
  var input = Number(prompt("Put in a decimal number"));
  // Number is added infront of prompt, bc we can not use a base when using toString on a String. 

  console.log(input + "in decimal to decimal:" + input);

  console.log(input + "in decimal to binary:" + input.toString(2));
  // It is a string bc prompt returns as a string

  console.log(input + "in decimal to octal:" +
    input.toString(8));

  console.log(input + "in decimal to hex:" + input.toString(16));

}