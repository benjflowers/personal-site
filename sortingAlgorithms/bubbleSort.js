console.log('begin work to bubble sort data');

const stackCount = 100;
const stackRange = 100;
const stackArray = Array(stackCount);
const stacksWrapper = document.querySelector('#stacks');
const stackButton = document.querySelector('#generateStacks');

stackButton.addEventListener('click', () => {
  generateStacks();
})

function generateStacks() {
  for(let i = 0; i < stackCount; i++) {
    stackArray[i] = Math.floor(Math.random() * stackRange + 1);

    let stackDiv = document.createElement('div');
    let stackValue = document.createTextNode(`${stackArray[i]}`);

    stackDiv.setAttribute(
      "style",
      `height: ${stackArray[i]};
       background: gray;
       margin-top: 5px;
       color: red;`
    );

    stackDiv.appendChild(stackValue);
    stacksWrapper.appendChild(stackDiv);
  }
}
