// Arithmetic Opreators in JS include (+, -, *, /, %)

{
  var slicesOfPizza = 10;
  console.log(slicesOfPizza + 10);
  console.log(slicesOfPizza - 14);
  console.log(slicesOfPizza * 3);
  console.log(slicesOfPizza / 4);
  console.log(slicesOfPizza % 4.25);
}

// OPERATOR PRECEDENCE
{
  var precedence1 = 5 + 3 * 12 - 20 / 10;
  var precedence2 = 5 + (3 * 12) - (20 / 10);
  var precedence3 = (5 + 3) * 12 - (20 / 10);

  console.log(precedence1, precedence2, precedence3);
}

// INCREMENT, DECREMENT & ASSIGNMENT OPERATORS
{
  let slicesOfPizza = 10;
  // slicesOfPizza = slicesOfPizza + 1;

   // OR

  slicesOfPizza++;
  console.log(slicesOfPizza);

  slicesOfPizza--;
  console.log(slicesOfPizza);

  ++slicesOfPizza;
  console.log(slicesOfPizza);

  --slicesOfPizza;
  console.log(slicesOfPizza);

  let newPizza = slicesOfPizza++; // This gives us 11 instead of 10
  console.log("slicesOfPizza:", slicesOfPizza);
  console.log("newPizza:", newPizza)

  slicesOfPizza = slicesOfPizza * 5;
  console.log(slicesOfPizza);

  slicesOfPizza += 4;
  console.log(slicesOfPizza);

  slicesOfPizza *= 4;
  console.log(slicesOfPizza);

  slicesOfPizza /= 4;
  console.log(slicesOfPizza);

  slicesOfPizza %= 4;
  console.log(slicesOfPizza);

}