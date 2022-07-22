{
  let myDate = new Date();
  console.log(myDate);
}

{
  let start = Date.now();

  let x = 0;
  for (let i = 0; i < 1000000; i++) {
    x = x + i;
  }

  let end = Date.now();
  let total = end - start;
  console.log("Time taken:" + total);
  console.log(x);

}

// ADDITION & SUBTRACTION OF DATES
{
  let before = new Date(2020, 10, 15);
  let after = new Date(2020, 10, 20);

  let oneDay = 1000 * 60 * 60 * 24;

  let days = (after - before) / oneDay;

  console.log(days);
}