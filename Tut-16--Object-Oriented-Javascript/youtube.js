{//CREATING A CONSTRUCTOR FUNCTION
  //Constructors start with capital letters unlike normal variables that start with small letters.
  function User(name, interests) {
    console.log(this);
    this.name = name;
    console.log(this);
    this.interests = interests;

  }

  let me = new User("Tessa", ["cooking", "eating", "exercise"]);
  let you = new User("Camila", ["hotwheels"]);
  console.log(me, you);

  me.membership = "Gold";
  console.log(me);

  //Creating a Factory Function

  function newUser(name, interests) {
    let person = {
      name: name,
      interests: interests
    };

    return person;
  }

  let they = newUser("Camila", ["hotwheels"]);

  //Creating Prototype Methods for Constructor Functions
  function User(name, interests) {
    this.name = name;
    this.interests = interests;
    this.outputStuff = function () {
      console.log(" my name is " + this.name, this.interests);
    }
  }

  me.outputStuff();
  you.outputStuff();

  User.prototype.greet = function () {
    console.log(" my name is " + this.name, this.interests);

  }

  let mine = new User("Tessa", ["cooking", "eating", "exercise"]);
  let them = new User("Camila", ["hotwheels"]);
  console.log(me, you);

  mine.greet();
  them.greet();

}

//PROTOTYPE INHERITANCE
{
  let user = {
    active: true
  };

  let teacher = {
    teaching: ["math", "science"]
  };

  Object.setPrototypeOf(teacher, user);

  console.log(teacher);
  console.log(teacher.active);

  //OVERRIDE IN PROTOTYPAL INHERITANCE
  let student = {
    major: "English"
  };

  Object.setPrototypeOf(student, user);

  student.active = false;

  console.log("student", student);


  //Instance Properties VS Prototype Properties

  let general = {
    active: false,
    sayHello: function () {
      return this.name + " says hi";
    }
  };

  let intern = {
    name: "Tessa Benedict",
    major: "tech"
  };

  let instructor = {
    name: "Caleb Curry",
    teaching: ["javascript", "c++"]
  };

  Object.setPrototypeOf(intern, general);
  Object.setPrototypeOf(instructor, general);

  intern.active = true;

  console.log("instructor", instructor.saysHello());
  console.log("intern", intern.saysHello());

}

