const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach - easier way to write a for loop, it doesn't return anything back to you (current, index, array)
// filter - Allows us to filter things out of the array (current, index, array)
// map - We can created new arrays from the current array, based on anything (current, index, array)
// sort - Sort an array in a certain order of choice - takes 2 values and compares them
// reduce - Reduces alot of items into 1 value


//START

// loop through companies with a for loop
//ES5


// loop through companies with a forEach loop
//ES5
//ES6


// Use the for loop and get all the ages out of the ages array that are 21 and over
//ES5
//ES6


// Use the filter method and get all the ages out of the ages array that are 21 and over
//ES5
//ES6


// Use the filter to filter out all the retial companies from the companies array
//ES5
//ES6


// Use the filter to filter out all companies that have started in the 80s
//ES5
//ES6


// filter out companies that have lasted 10 years or more
//ES5
//ES6


// Use map to take out all of the company names and add them into their own array
//ES5
//ES6


// Use map to take out all of the company names and add them into their own array with there start and end dates
//ES5
//ES6


// Use map to times 2 all ages in the ages array
//ES5
//ES6


// Using the sort method, sort all the companies by their start date
//ES5
//ES6


// Using the sort method, sort all the ages in the ages array
//ES5
//ES6


// Using the reduce method, add all the ages together
// forloop


// reduce
//ES5
//ES6



// Using the reduce method, get the total years for all companies
//ES5
//ES6


//Combine methods with the ages array
//ES6