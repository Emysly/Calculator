let input = document.querySelector('.calc-display');

document.querySelector('.keypad').addEventListener('click', e => {
  e.preventDefault();

  if(e.target.classList.contains('container')) {
    return;
  } else {
  input.value += e.target.value;
  }
  
const inputArray = input.value.split(',');
console.log(inputArray);

let a = inputArray[0];
let b = inputArray[1];

console.log(inputArray[0]);

let operator;
if (e.target.classList.contains('btn-operator')) {
operator = document.querySelector('.btn-operator').value;
console.log(operator);
}
switch(operator) {
  case '+':
  input.value = '';
   inputArray.reduce((a, b) => parseFloat(a) + parseFloat(b));
    break;
  case '-':
      inputArray.reduce((a, b) => parseFloat(a) - parseFloat(b));
      break;
  case '*':
      inputArray.reduce((a, b) => parseFloat(a) * parseFloat(b));
      break;
  case '/':
      inputArray.reduce((a, b) => parseFloat(a) / parseFloat(b));
      break;
  default :
      return '';
}

})

document.querySelector('.btn-orange').addEventListener('click', e => {
  
})

