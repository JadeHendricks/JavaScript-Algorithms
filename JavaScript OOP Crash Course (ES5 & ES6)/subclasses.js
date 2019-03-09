class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  //this gets added into the proto right away
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//creating a subclass
//this will have everything that book has, but also have it's own props
class Magazine extends Book {
  //we add all the props from Book plus our own
  constructor(title, author, year, month) {
    //we use super to call the parent constructor
    //this takes all the Book props
    super(title, author, year);
    this.month = month;
  }

}

//Intatiate Magazine
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');
console.log(mag1);
console.log(mag1.getSummary());