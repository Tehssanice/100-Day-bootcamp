{
  let general = {
    active: false,
    sayHello: function () {
      return this.name + " says hi";
    }
  };

  let intern = {
    name: "Tessa Benedict",
    major: "tech",
    sayHello: function () {
      return this.name + " majors in Tech and Nutrition";
      this.major.forEach(function (e) {
        message += e + " ";
      });
      return message;
    }
  };

  let instructor = {
    name: "Caleb Curry",
    teaching: ["javascript", "c++"],
    sayHello: function () {
      return this.name + " teaches javascript";
      this.teaching.forEach(function (e) {
        message += e + " ";
      });
      return message;
    }
  };

  Object.setPrototypeOf(intern, general);
  Object.setPrototypeOf(instructor, general);

  intern.active = true;

  let newMembers = [instructor, intern];

  newMembers.forEach(function (e) {
    console.log(e.sayHello());
  });

  //Checking an Object for a Property Using in
  console.log("Name in instructor? ", "name" in instructor);

  console.log("Name in instructor? ", instructor.name !== undefined);


  //hasOwnProperty Method: this doesn't go beyond the object, it won't check the prototype, unlike  the E.g above
  console.log("Name in instructor? ", instructor.hasOwnProperty("name"));


  //Array of Property Names from an Object
  let properties = [];

  for (let prop in instructor) {
    if (instructor.hasOwnProperty(prop)) {
      properties.push(prop);
    }
  }

  console.log(properties);

}


//Prototypes of Functions
function doSomething() {
  return 1 + 1;
}

document.write("Calling a function as a constructor transfers the prototype of the function to the new object as its prototype")

let test = new doSomething();

if (doSomething.prototype === Object.getPrototypeOf(test)) {
  console.log("match");
}


function Taco() {
  this.toppings = [" cheese"];
}

Taco.prototype.make = function () {
  console.log(" Making a taco...");
};

let myTaco = new Taco();
let newTaco = new Taco();


//Converting Object Literals to Constructors
{
  function User() {
    this.active = false;
  }

  User.prototype.sayHello = function () {
    return this.name + " says hi";
  };

  function Pupil(name, major) {
    this.name = name;
    this.major = major;
  }

  Pupil.prototype = new User();//Setting Prototype with Constructors

  function Lecturer(name, teaching) {
    this.name = name;
    this.teaching = teaching;
  }

  Lecturer.prototype = new User();//Setting Prototype with Constructors
  Lecturer.prototype.sayHello = function () {
    return " Lecturer says hi!";
  }

  let pupil = new Pupil("Theresa Benedict", "Tech");
  let lecturer = new Lecturer("Caleb Curry", ["Javascript", "C++"]);

  console.log(pupil, lecturer);


  // Instanceof Operator
  console.log(lecturer instanceof Lecturer);
  console.log(lecturer instanceof User);
  if (lecturer instanceof Pupil) {
    console.log("yep");
  } else {
    console.log("nope");
  }

  function doSomething(user){
    if(user instanceof User){
      return 5;
    }
    return -1
  }
  console.log(doSomething("teacher"));

}
