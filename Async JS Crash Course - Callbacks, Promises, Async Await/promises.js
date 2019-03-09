const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];


//THE PROMISE SOLUTION
function getPosts() {

  setTimeout(() => {

    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;

  }, 1000);

}

//this function returns a promise. Then we can use that prmoise with (then) when we call it to resolve or reject the promise.
function createPost(post) {

  return new Promise ((resolve, reject) => {

    setTimeout (() => {
      posts.push(post);

      const error = false;

      if (!error) {
        //as soon as the timeout is done, it will resolve if there is no error, "then", we call get Posts afterwards
        resolve();
      } else {
        //this will run if we get an error and not resolve
        reject('Error, Something went wrong.');
      }
    }, 2000); 

  });

}

createPost({title: 'Post Three', body: 'This is post 3'})
  //if resolved, then run getPosts
  .then(getPosts)
  //if rejected, then run reject err message
  .catch(err => console.log(err));