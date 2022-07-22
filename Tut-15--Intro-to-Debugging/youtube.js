{ //DEBUGGING
  function fact(x) {
    let total = 1;
    for (let i = x; i > 1; i--) {
      // console.log(total); 
      total *= i;
    }
    return total;
  }
  console.log(fact(5));


  //EVENT LISTENER BREAKPOINTS
  document.getElementById("lemons")
    .onclick = () => { console.log("Clicked") };

}


{
  //EXCEPTIONS THROW, CATCH, FINALLY
  document.write("Control flow & Error handling. Error handling is basically handling errors that occur. Control flow are just 'If statements, switches loops e.t.c.")

  try {
    doesntExist;//this doesn't exist, but with 'FINALLY'
  } catch (e) {
    console.log(e);
  } finally {
    console.log("test");
  }

  //E.g
  function doSomething() {
    throw { error: "Tis broke", code: -1 };
  }

  try {
    doSomething();
  } catch (e) {
    console.log(e);
    console.log("Error");
  } finally {
    console.log("Wrapping things up...");
  }
}