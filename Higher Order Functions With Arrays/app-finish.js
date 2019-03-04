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
// filter - Allows us to filter things out of the array
// map
// sort
// reduce


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
