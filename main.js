let allPosts = getAllEles('post');
setDates(allPosts);

var canvas  = document.querySelector('canvas#canvasIntro');
var context = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRation;
canvas.width = 700//size * dpr;
canvas.height = 200//size * dpr;
context.scale(dpr, dpr);

var count = 0;
canvas.addEventListener('click', e => {
  let chance = Math.random();

  if(count > 10) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    count = 0;
  }

  if(chance > .5) {
    context.moveTo(canvas.width, 0);
    context.lineTo(0, canvas.height);
  } else {
    context.moveTo(0, 0);
    context.lineTo(canvas.width, canvas.height);
  }
  context.lineWidth = random(100);
  context.strokeStyle = `rgba(${random(200)}, ${random(200)}, ${random(100)}, ${Math.random()})`
  context.stroke();

  count += 1
})

//takes two numbers
//returns random number between two numbers
function random(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

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
    let postDateSection = filterChildren(post).filter( item => item.attributes.class.value == 'date')[0];

    postDateSection.innerText = post.attributes.date.value;
  }
}

// takes html element
// returns all elements with class
function filterChildren(element) {
  return Array.from(element.children).filter( item => item.attributes.class != null);
}
