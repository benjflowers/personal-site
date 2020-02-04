console.log('begin work to bubble sort data');

const stackCount = 85;
const stackRange = 1000;
const stackArray = Array(stackCount);
const stacksWrapper = document.querySelector('#stacks');
const stackButton = document.querySelector('#generateStacks');

stackButton.addEventListener('click', () => {
  generateStacks();
})

function generateStacks() {
  stacksWrapper.innerHTML = "";
  for(let i = 0; i < stackCount; i++) {
    stackArray[i] = Math.floor(Math.random() * stackRange + 1);

    let stackDiv = document.createElement('div');

    let stackValue = document.createElement('p');
    stackValue.innerText = `${stackArray[i]}`;
    stackValue.setAttribute(
      "style",
      'font-size: x-small;'
    )

    stackDiv.setAttribute(
      "style",
      `height: ${stackArray[i]};
       background: gray;
       margin-top: 5px;
       color: red;
       display: grid;
       align-items: end;`
    );

    stackDiv.appendChild(stackValue);
    stacksWrapper.appendChild(stackDiv);
  }
}
