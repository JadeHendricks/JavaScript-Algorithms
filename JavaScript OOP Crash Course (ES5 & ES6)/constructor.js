// Constructor
function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  //we should put these into the prototype
  this.getSummary = function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//when you instatiate a constructor it's going to run whatever is in the function
const book1 = new book('Book One', 'John Doe', '2016');
const book2 = new book('Book Two', 'Jane Doe', '2016');

console.log(book1);
console.log(book1.title);
console.log(book2.year);
console.log(book2.getSummary());