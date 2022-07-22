// // An ARRAY is a group of related elements. An INDEX shows the position of an element in an array starting from 0
// {
//   let ages = [12, 34, 13, 46, 67, 78, 15];
//   console.log(ages);
//   console.log(ages[2]);
//   console.log(ages.length);
//   // You can change the length of an array, putting gaps that read as "undefined" by doing this 
//   ages.length = 9;
//   console.log(ages[6]);
//   // You can assign an element to an index that does not exist and it will extend that array
//   // ages[7] === 17; 
//   // console.log(ages[7]);
//   //you can also shorten an array
//   ages.length = 3;
//   console.log(ages);
// }

// //MULTIDIMENSIONAL ARRAYS
// {
//   let grades = [[11, 22, 33], [44, 55, 66, 88, 77],
//   [333, 222, 111, 99]]
//   // To select one of the arrays
//   console.log(grades[1]);
//   //To select an element from an array 
//   console.log(grades[2][3]);
// }

// //USING ARRAY
// {
//   let grades = [12, "beach", {}, function () { console.log("hello") }];
//   console.log(grades);
//   // ({}) this indicates objects.
//   grades[3]();
// }
// // you can also write arrays in a list form
// {
//   let figures = [];
//   figures[0] = 12;
//   figures[1] = 22;
//   figures[2] = 32;
//   figures[3] = 42;
//   figures[4] = 52;
//   figures[5] = 62;
//   figures[30] = 72; //there are empty 27 spaces after [2] without values attached to them.But to avoid gaps number them serially.
//   console.log(figures);

//   for (let i = 0; i < figures.length; i++) {
//     console.log(figures[i]);
//   }
//   figures.length = 300;
//   figures[350] = 30;// this has automatically increased the legth of this array to 351.

//   console.log(figures.length);

//   //we can manually crop the length of an array
//   figures.length = 2;
//   console.log(figures);
// }

// {
//   let matter = [15, 43, 4, 66, 9, 7, 33, 43, 6, 43];
//   //How to skip the undefined
//   matter.length = 30;
//   matter[34] = 40;
//   console.log(matter);


//   // for (let i = 0; i < matter.length; i++) {
//   //   {
//   //     if (matter[i] !== undefined) {
//   //       console.log(matter[i]);
//   //     }
//   //   }
//   // }

//   // let found = false;
//   // let search = 43; 
//   let largest = matter[0];

//   for (let i = 0; i < matter.length; i++) {
//     // {
//     //   if (matter[i] === search) {
//     //     console.log(matter[i] + " at index " + i);
//     //     break;
//     //   }
//     // }
//     if (matter[i] > largest) {
//       largest = matter[i];
//     }
//   }
//   console.log(largest);
// }

//AVERAGE OF ARRAYS
// {
//   let grades = [15, 4, 4, 66, 7, 9, 33, 4, 6, 43, 43, 43];
//   grades.length = 30;
//   grades[34] = 40;

//   let count = 0;
//   let total = 0;

//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] !== undefined) {
//       count++;
//       total += grades[i];
//     }
//   }

//   let avg = total / count;
//   console.log(avg);
// }

// FILL ARRAY FROM USER INPUT INDEFINITE LOOP & SENTIEL VALUE
// {
//   let grades = [];

//   while (true) {
//     let input = prompt("Add a grade");
//     if (input === "q" || input === null) {
//       break;
//     }
//     grades.push(Number(input));
//     console.log(grades);
//   }
// }

//ARRAY METHODS
{
  let grades = [];
  let poppedValue = grades.pop();

}

{
  let grades = [1, 2, 3];

  grades.unshift(40);// unshift is used to add a new element in an array
  4

  //   // grades
  //   //   (4)[40, 1, 2, 3] // this is the new array

  grades.shift();// this is used to select the last added element
  40

  grades.push(40, 20, 10, 40)//this is used to add new elements in an array
  7

  //   grades
  //     (7)[1, 2, 3, 40, 20, 10, 40] // this is the new array

  //   grades[3] = 400// this is how to change/replace an element within an array by selecting the index.
  //   400

  //   grades
  //     (7)[1, 2, 3, 400, 20, 10, 40]// this is the new array

  //   grades[5] = 67
  //   67

  //   grades
  //     (7)[1, 2, 3, 400, 20, 67, 40]//this is new array
}

//SPLICE METHOD this can be used to add and remove elements from the array
{
  // TO REMOVE

  let grades = [1, 2, 3, 4000, 20, 10, 40];
  grades.splice(2, 3)// this deletes the elements in index 2 & 3
  console.log(grades);
  // the new grades are [1, 2, 3, 10, 40]

  //TO ADD
  grades.splice(2, 0, 5, 6, 8); //the 2 indicates the new elements added starts at index 2 which is (3) in this case. 0 means that none was deleted/replaced
  console.log(grades);
  //the new grades are[1,2,5,6,6,8,10,40]

  //TO REPLACE
  grades.splice(2, 4, 0, 0, 0); // the 4 tells us the number of elements that will be replaced from the second index
  console.log(grades);

  //SORTING METHOD
  grades.push(15, 13, 524, 64, 2, 4, 43, 65, 756, 34, 23, 3);
  grades.sort();// this positions the elements based on the first digit e.g [1, 10, 2, 25, 3, 39, 4,] instead of [1, 2, 3, 4, 10, 25, 39]
  console.log(grades);

  grades.sort(function () { })
  console.log(grades);

  grades.sort(function (a, b) { return a - b });
  console.log(grades);

  //THE REVERSE METHOD
  grades.reverse()// THis changes the direction of the array from left to right
  console.log(grades);

  //FILL METHOD
  grades.fill(-1, 0, grades.length)
  console.log(grades);

  grades.fill(-3, 5, grades.length);
  console.log(grades);

  //COPYWITHIN: THis allows us to copy a portion of an array and replace it with another
  grades.copyWithin();

}

{
  let grades = [20, 22, 39];
  console.log(grades);

  //CONCATENATION
  let gradesB = [43, 12, 524, 34, 23];
  console.log(gradesB);

  let zinc = grades.concat(gradesB)// this puts the values of both grades and gradesB together 
  console.log(zinc);

  let tacos = grades.concat(gradesB)//the difference btw push and cocat is that push will change the original array and return the length of the array, but concat will return the new array itself.
  console.log(tacos);

  // let plus = grades + gradesB;
  // console.log(plus);

  //INCLUDES
  let gold = grades.includes(22);
  console.log(gold);

  let golf = grades.includes(92);
  console.log(golf);



  // INDEXOF
  let silver = grades.indexOf(22);
  console.log(silver);

  let silt = grades.indexOf(39);
  console.log(silt);
}

//FOREACH ARRAY MEHTOD
{
  let grades = [12, 13, 32, 43, 42, 43];
  grades.length = 30;

  // for (let i = 0; i < grades.length; i++) {
  //   if (grades[i] !== undefined) console.log(grades[i]);
  // }

  //OR 
  grades.forEach(function (item, i) {
    console.log(item, i);
  });
}

//ITERATE MULTIDIMENSIONAL ARRAY WITH FOR AND FOR EACH
{
  let grades = [
    [12, 13, 14, 15, 34, 56],
    [34, 45, 67, 89, 6, 5, 9, 77, 234, 897],
    [45, 67, 87, 32, 12, 11]
  ];
  // grades.length = 30;
  for (let i = 0; i < grades.length; i++) {
    console.log(grades[i]);
    for (let k = 0; k < grades[i].length; k++) {
      console.log(grades[i][k]);
    }
    console.log("~~~~~~~~~");
  }

  grades.forEach(function (row) {
    console.log(row);
    row.forEach(function(col){
      console.log(col);
    });
    console.log("~~~~~~");
  });

}

//LABELS WITH BREAK AND CONTINUE
{
  let grades = [
    [ ]
  ];
}


