//Object Literal
const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

console.log(book1.getSummary());

//What if we want to create more than one book? - Check out the constructor
