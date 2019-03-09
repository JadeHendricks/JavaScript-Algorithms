//ASYNC Await is a way to handle responses, it not a different way tow rite them.
//We basically need a function that's label asynchronous
// it is a elegant way to handle promises without writting .then
const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];


function getPosts() {

  setTimeout(() => {

    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;

  }, 1000);

}

function createPost(post) {

  return new Promise ((resolve, reject) => {

    setTimeout (() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error, Something went wrong.');
      }
    }, 2000); 

  });

}

//it waits for a async process to complete
async function init() {
  //we use await here so that we know we have to wait for this to finish first before we can do something else
  await createPost({title: 'Post Three', body: 'This is post 3'})
  //after createPosts has been ran, we will run this afterwards, no matter how long it takes
  getPosts();
}

init();


//Async awaut with fetch
async function fetchUsers() {
  //The fetch api requires you to transform all content into json and then we can use that data only after that
  const res = await fetch('https://jsonplaceholder.typicode.com/users');

  const data = await res.json();
  console.log(data);
}

fetchUsers();