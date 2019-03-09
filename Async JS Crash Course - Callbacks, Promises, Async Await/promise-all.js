//Promise.all
// we can use this to run multiple promises at once
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'GoodBye'));
//The fetch api requires you to transform all content into json and then we can use that data only after that
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());
//Promise.all takes in an array of promises
//it then takes a .then that takes a parameter called values
//it will take hoever long the longest promise is to return in this case it's 2000ms
Promise.all([promise1, promise2, promise3, promise4])
  .then(values => console.log(values));
