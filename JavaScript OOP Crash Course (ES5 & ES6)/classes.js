class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  //a static method is a function you can use without instatiating an object first
  static topBookStore() {
    return 'Barnes and Nobal'
  }

  //this gets added into the proto right away
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  //this gets added into the proto right away
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  //this gets added into the proto right away
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
}

//instatiate the object
const book1 = new Book('Book One', 'John Doe', '2013');
console.log(book1);

book1.revise('2018');
console.log(book1);

//No instatiation needed
console.log(Book.topBookStore());