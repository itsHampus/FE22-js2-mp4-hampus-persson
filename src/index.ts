const numberButtons = document.querySelectorAll('#numbers button');

let currentValue: string = '';
let operator: string = '';
let result: number = 0;
const addToInput = (value: number) => {
    currentValue += value;
    displayInput(currentValue);
}
numberButtons.forEach((button) => {
    button.addEventListener('click', () => addToInput(button.value));
})

const operatorButtons  = document.querySelectorAll('#operators button');

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        operator = button.innerText;
        result = Number(currentValue);
        currentValue = '';
    })
})

const calculate = () => {
    const number2 = Number(currentValue);
    switch (operator) {
        case '+':
            result += number2;
            break;
        case '-':
            result -= number2;
            break;
        case '*':
            result *= number2;
            break;
        case '/':
            result /= number2;
            break;
    }
    displayInput(result.toString());
}

const equalButton = document.querySelector('#equal')!;
equalButton.addEventListener('click', calculate);

const clearButton = document.querySelector('#clear')!;
clearButton.addEventListener('click', () => {
  currentValue = '';
  operator = '';
  result = 0;
  displayInput('');
});

const displayInput = (value: string) => {
    const p: HTMLParagraphElement = document.querySelector('#screenInput p')!;
    p.innerText = value;
}

const img = document.createElement('img');
document.body.append(img);
const imgURL = new URL('./images/pexels-jill-wellington-3969253.jpg', import.meta.url);
img.src = imgURL;
