console.log('begin work to bubble sort data');

const stackCount = 5;
const stackRange = 1000;
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

function generateStacks() {
  stacksWrapper.innerHTML = "";

  setStackArray(stackArray, stackCount, stackRange);
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
  //bubble sort: Check the adjacent element of each current index. Swap if deficit
  // Example: 1, 6, 4, 2 - Check 6 against 1, one is lower, stays, check 4 to 6, 4 is lower, switch
  console.log(array);

  for(let i = 0; i < array.length; i++) {
    // First iteration
    if(i == 0) {
      let rightNeb = array[i + 1];

      if ( rightNeb < array[i]) {
        let removed = array.splice(i, 1, rightNeb);
        array.splice(i + 1, 1, removed[0]);
      }
    }
  }

  console.log(array);

}
