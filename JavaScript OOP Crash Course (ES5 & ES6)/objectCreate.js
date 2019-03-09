//Object of protos
//this will be added to an objects prototype by using Object.create 
const bookProtos = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
}

//Create Object
//here we add the bookProtos into our prototype
const book1 = Object.create(bookProtos);
book1.title = "Book One";
book1.author = "John Doe";
book1.year = "2013";

console.log(book1);

//OR

const book2 = Object.create(bookProtos, {
  title: {value: 'Book Two'},
  author: {value: 'John Doe'},
  year: {value: '2013'}
});

console.log(book2);



