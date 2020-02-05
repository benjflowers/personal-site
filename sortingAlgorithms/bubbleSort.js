console.log('begin work to bubble sort data');

const stackCount = 130;
const stackRange = 500;
const stackArray = Array(stackCount);
const stacksWrapper = document.querySelector('#stacks');
const stackButton = document.querySelector('#generateStacks');
const sortStackButton = document.querySelector('#sortStacks');

stackButton.addEventListener('click', () => {
  generateStacks();
})

sortStackButton.addEventListener('click', () => {
  if(stackArray[0] == null) {
    console.log('Generate Stack first')
  } else {
    sortStack(stackArray);
  }
})

function generateStacks(arg) {
  stacksWrapper.innerHTML = "";

  if(arg != 'sorted') {
    setStackArray(stackArray, stackCount, stackRange);
  }

  for(let i = 0; i < stackCount; i++) {
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

  console.log(stackArray);
}

function setStackArray(array, count, range) {
  for(let i = 0; i < count; i++) {
    array[i] = Math.floor(Math.random() * range + 1);
  }
}

function sortStack(array) {
  let len = array.length;

  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - 1; j++){
      if(array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array [j + 1];
        array[j + 1] = temp;
      }
    }
  }

  generateStacks('sorted');
}
