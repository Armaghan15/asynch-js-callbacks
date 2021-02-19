// A callback is a function that is passed as a paramater into another function and it's ran inside the function body

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
  { title: "Post Three", body: "This is post three" },
];

// Synchronous way of creating and getting posts
// -------------------//
// // function for creating posts
// function createPost(post) {
//   setTimeout(function () {
//     posts.push(post);
//   }, 2000);
// }

// // Function for getting posts
// function getPosts() {
//   setTimeout(function () {
//     output = ``;
//     posts.forEach(function (post) {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "Post Four", body: "This is post four" });

// Runing getPosts seperatly
// getPosts();

// ----------------------------------------------------------------------------------//

// Asynchronous way of creating and getting posts
// function for creating posts
function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

// Function for getting posts
function getPosts() {
  setTimeout(function () {
    output = ``;
    posts.forEach(function (post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Calling createPost and getPosts inside createPost as a callback function
createPost({ title: "Post Four", body: "This is post four" }, getPosts);
createPost({ title: "Post Five", body: "This is post Five" }, getPosts);
