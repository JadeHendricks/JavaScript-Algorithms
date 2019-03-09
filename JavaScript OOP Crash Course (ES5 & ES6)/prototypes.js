// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//get summary
//we do this because we can inherit it and not create it for every book, because not everybook needs it
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
}

//get age
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
}

//Revise / Change Year (minipulating the data)
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
}

//when you instatiate a constructor it's going to run whatever is in the function
const book1 = new Book('Book One', 'John Doe', '2016');
const book2 = new Book('Book Two', 'Jane Doe', '2016');

console.log(book1);
console.log(book1.title);

console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());

book2.revise('2018');
console.log(book2);