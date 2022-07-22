//OBJECTS & FUNCTIONS
{
  let position = { // Everything inside of the curly braces are known as properties/members, and some of the properties are funstions.
    x: 10,
    y: 20,
    print: function () {
      console.log(`X: ${this.x}, Y: ${this.y}`);
    }
  }

  let myPosition = position;

  console.log(position);
  console.log(myPosition);

  myPosition.x = 15;

  console.log(position);
  console.log(myPosition);

  position.print();

}

