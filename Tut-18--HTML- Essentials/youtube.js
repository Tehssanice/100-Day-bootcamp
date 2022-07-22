{
  let myButton = document.getElementById("click me");
  // myButton.disabled = true;
  myButton.style.backgroundColor = "Red";

  myButton.onclick = function () {
    myButton.style.backgroundColor = "green"
  }
}

//DOCUMENT OBJECT MODULE [DOM]
{
  let list = document.childNodes[1].childNodes[2].childNodes[3];

  console.log(list);
  console.log(list.parentElement);
  console.log(list.nextSibling.nextSibling);

  //getElementByTagName and getElementByClassName

  let set = document.getElementsByTagName("li");

  if (set[0].nodeType === 1) { //Node Types and Node Names
    console.log("element");
  } else if (set[0].nodeType === 3) {
    console.log("text");
  }

  console.log(set);

  let group = document.getElementsByClassName("border");

  console.log(group);


  let paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs);

  //nodeValue
  console.log(paragraphs[0].childNodes[0].nodeValue = "llamas");


  //Modifying nodeValue
}