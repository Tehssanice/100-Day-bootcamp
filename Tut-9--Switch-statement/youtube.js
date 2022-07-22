// // IF, ELSE & ELSE IF STATEMENTS
{
  var name = prompt();
  if (name === "Theresa") {
    console.log("Welcome!");
  }
  else if (name === "Sally") {
    console.log("Welcome Sally!");
  }
  else {
    console.log("You are not welcome!");
  }
}

// //COMPARISON OPERATORS: We'll be comparing the value of name to some string literal

{
  var name = prompt();
  if (name !== "Theresa") { //This means that as far as your name is not Theresa, then you are welcome
    console.log("You are welcome");
  }
  else {
    console.log("Hey Dubem!");
  }
}

{
  var age = prompt();
  if (age >= 12) {
    console.log("Yay, you've been selected");
  }
  else {
    console.log("Slots are no longer available");
  }
}

//LOGICAL OPERATORS: Three main operators; (and[&&], or[||], not[!]) which helps us make more complex comparisons
{
  var age = prompt();
  if (age < 13 || age >= 65) {
    console.log("You are our target");
  }
}

{
  var age = prompt("How old are you?");
  var name = prompt("What is your name?");
  if (age < 13 && name === "theresa") {
    console.log("Yay! We got her!!!")
  }
  else {
    console.log("Sorry, try again some other time");
  }
}

{
  var age = prompt("Age, please");
  var name = prompt("Name too");
  if (age < 13 && !(name === "Theresa")) {
    console.log("You're here, finally!")
  }
  else {
    console.log("Sorry, not you!")
  }
}
// OR , instead of combining all together, you can put it this way to get the same reslts
{
  var age = prompt("Age, please");
  var name = prompt("Name too");
  if (age < 13) {
    if (!(name === "Theresa")) {
      console.log("You're here, finally!")
    }
  }
  else {
    console.log("Sorry, not you!")
  }
} 

// //SWITCH STATEMENT
{
  let name = prompt("What is your name");

  switch (name) {
    case "Theresa":
      console.log("Hey!");
      break; // this prevents fall through, bc without it, the system executes the next case automatically, which we may not want.
    case "Sally":
      console.log("out!")
      break;
    // In a situation where we want sth to happen to all the cases, we can do this;
    case "Glorie":
    case "Faith":
    case "Sylvia":
      console.log("Hey guys, what's up?");
      break;
    default:
      console.log("Well, you can stay...");
      break;
  }
}

//SINGLE LINE IF STATEMENT
{
  let name = prompt("What country is this?");
  if (name === "Nigeria") console.log("It actually is");// THIS IS ACTUALLY WHAT THE SINGLE LINE MEANS.
  // The curly braces that comes with the IF wasn't added bc it isn't compulsory, but it makes it more understandable for beginners like myself, so you may/may not add it.

  console.log("Just go with the flow");// THis line of code is not part of the [IF], it is actually for the prompt.
}

//TERNARY OPERATOR: this works on 3 operants
{
  let name = prompt("What is my name?");
  let points = name === "Dubem" ? 10 : 0;
  console.log(points); // OR 

  if (name === "Dubem") {
    points = 10;
  } else {
    points = 0;
  }
   // OR

  name === "Theresa" ? console.log("10") : console.log("0");
  

}
