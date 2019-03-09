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

//create a magazine object that inherits the properties of the book
//needs the same props as Book + extra
function Magazine(title, author, year, month) {
  //takes in the instance itself and the props from Book
  Book.call(this, title, author, year);
  this.month = month;
}

//this is how to also inhert the prototypes of Book
Magazine.prototype = Object.create(Book.prototype);

//instatiate magazine object
const magazine1 = new Magazine('Mag one', 'John Doe', '2018', 'Jan');

//how to make the proto use the magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(magazine1);
console.log(magazine1.getSummary());