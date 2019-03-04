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
for (let i = 0; i < companies.length; i++) {
  console.log(companies[i]);
}

// loop through companies with a forEach loop
companies.forEach(function (company) {
  console.log(company);
  console.log(company.name);
});


// Use the for loop and get all the ages out of the ages array that are 21 and over
let canDrink = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i]);
  }
}

console.log(canDrink);


// Use the filter method and get all the ages out of the ages array that are 21 and over
//ES5
const canDrinkFilter = ages.filter(function(age) {
  if (age >= 21) {
    return true;
  }
});

//ES6
const canDrinkFilterES6 = ages.filter( age => age >= 21);


// Use the filter to filter out all the retial companies from the companies array
const retailCompanies = companies.filter(function (company) {
  if (company.category === 'Retail') {
    return true;
  }
});

//ES6
const retailCompaniesES6 = companies.filter( company => company.category === 'Retail');

console.log(retailCompanies);
console.log(retailCompaniesES6);


// Use the filter to filter out all companies that have started in the 80s
const companies80s = companies.filter(function(company){
  if (company.start > 1979 && company.start < 1990) {
    return true;
  }
});

console.log(companies80s);

// filter out companies that have lasted 10 years or more
const companies10Years = companies.filter(function(company){
  if ((company.end - company.start) >= 10) {
    return true;
  }
});

console.log(companies10Years);


// Use map to take out all of the company names and add them into their own array
const companyNames = companies.map(function(company){
  return company.name;
});

console.log(companyNames);

// Use map to take out all of the company names and add them into their own array with there start and end dates
const companyNamesandDates = companies.map(function(company){
  return `${company.name} [${company.start} - ${company.end}]`;
});

console.log(companyNamesandDates);

// Use map to times 2 all ages in the ages array
const agesTimes2 = ages.map(function(age) {
  return age * 2;
});

console.log(agesTimes2);


// Using the sort method, sort all the companies by their start date
const sortedComapnies = companies.sort(function(a, b) {
  if (a.start > b.start) {
    return 1;
  }
  return -1;
});

//ES6
const sortedComapniesES6 = companies.sort((a , b) => (a.start > b.start ? 1: -1));

console.log(sortedComapnies);
console.log(sortedComapniesES6);


// Using the sort method, sort all the ages in the ages array
const sortedAges = ages.sort(function(a, b) {
  if (a > b) {
    return 1;
  }
  return -1;
});

//ES6
const sortedAgesES6 = ages.sort( (a, b) => a - b);

console.log(sortedAges);
console.log(sortedAgesES6);


// Using the reduce method, add all the ages together
// forloop
let ageSum = 0;

for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}

console.log(ageSum);

// reduce
const reduceSum = ages.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

//ES6
const reduceSumES6 = ages.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(reduceSumES6);


// Using the reduce method, get the total years for all companies
const totalYears = companies.reduce( function (accumulator, currentValue) {
  return accumulator + (currentValue.end - currentValue.start);
}, 0);

//ES6
const totalYearsES6 = companies.reduce((accumulator, currentValue) => accumulator + (currentValue.end - currentValue.start), 0);

console.log(totalYears);
console.log(totalYearsES6);


//Combine methods
const combinedAges = ages
      .map(age => age * 2)
      .filter(age => age >= 40)
      .sort((a, b) => a - b)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(combinedAges);