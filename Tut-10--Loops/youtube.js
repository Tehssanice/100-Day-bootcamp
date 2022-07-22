//Loops: Types of loops are built on 3 principles
// ----initialization
// ----condition
// ----update

// TYPES OF LOOP: (while loop, do while loop, for loop )

// { // WHILE LOOP
//   let i = 0; // initialization
//   while (i < 10) { // condition
//     console.log(i);
//     i++; // update
//   }
// }

// { // DO WHILE LOOP:This does sth at least once
//   let i = 1000; // initialization
//   do {
//     console.log(i); // code
//     i++; // update
//   } while (i < 10); // condition

// }

// {
//   let password;
//   do {
//     password = prompt("What is the passcode?");
//   } while (password.toLowerCase() !== "let me in");
// }

// //OR

// { // FOR LOOP
//   for (let i = 0; 1 < 10; i++){
//     console.log(i);
//   }
// }

// {
//   let myString = "Search this string baby";
//   let charToSearch = "c";
//   for (let i = 0; i < myString.length; i++) {
//     if (myString[i] === charToSearch) {
//       console.log(myString[i] + " is found at index " + i);
//       break;
//     }

//     if (myString[i] === "a"
//       || myString[i] === "e"
//       || myString[i] === "i"
//       || myString[i] === "o"
//       || myString[i] === "u") {
//       continue;
//     }
//     console.log(myString[i]);
//   }
// }

// {
//   let list = [1, 3, 4, 6, 7, 5, 4, 2, 3];
//   for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);
//   }
// }

// NESTED LOOPS
// {
//   for (let i = 0; i < 10; i++) {
//     for (let k = 0; k < 10; k++) {
//       console.log(i, k);
//     }
//   }
// }

// {
//   let d = document.getElementById("destination");
//   for (let i = 0; i < 10; i++) {
//     for (let k = i; k >= 0; k--) {
//       d.append(k + " ");
//     }
//     var br = document.createElement('br');
//     d.appendChild(br);
//   }
// }