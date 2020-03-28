// takes string argument
// returns array of all elements
function getAllEles(element) {
  return Array.from(document.querySelectorAll(element));
}

// takes array of post elements
// sets the date of all posts
function setDates(posts) {
  for(let currentPost = 0; currentPost<posts.length; currentPost++) {
    let post = posts[currentPost];
    console.log(post.children[1].attributes.class.value);
    let postDateSection = Array.from(post.children).filter( item => item.attributes.class.value == 'date')[0];

    postDateSection.innerText = post.attributes.date.value;
  }
}

let allPosts = getAllEles('post');
setDates(allPosts);


