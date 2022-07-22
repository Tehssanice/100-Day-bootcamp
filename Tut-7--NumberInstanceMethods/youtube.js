//STRING Data Type
{
  let myName = "Dubem";
  let yourName = new String("Tessa");
  console.log(myName);
  console.log(myName.length);

  console.log(yourName);
  console.log("My name is " + myName + "!");
  // OR
  console.log(`My name is  ${myName}!`);

  let test = "lorem ipsum... This is a rally wonderful world that we are in. I just love it so much. What about you? "

  console.log(test);
  console.log(test.length);
}

//STRING METHODS
{
  var favFood = "tacos"
  console.log(favFood.charAt(2));
  console.log(favFood.concat(" are totes lit")); //OR
  console.log(favFood + " are totes lit"); 
}

{
  let content = "Today we'll be talking about string methods and how fun they are";
  let search1 = "string";
  let search2 = "number";
  console.log(content); 

  console.log(content.includes(search1));
  console.log(content.includes(search2));
  console.log(content.indexOf(search1));
  console.log(content.indexOf(search2));
}

//SUBSTRING METHOD
{
  let content = "Today we'll be talking about string methods and how fun they are";
  
  console.log(content.substring(6, 11));
  console.log(content.substr(6, 5));
  console.log(content.slice(6, 11));
  console.log(content.toUpperCase());
  console.log(content.toLocaleLowerCase());
  console.log(content.trim()); // this removes any space in the sentence, at the beginning or end.
  console.log(content.split(" "));


  let waiting = "tick tock";
  console.log(waiting.repeat(10));

}