const decrementButton = document.getElementById('decrementa');
const incrementButton = document.getElementById('incrementa');
const counterDisplay = document.getElementById('numero');

let counter = 0;

function increment() {
    counter++;
    updateDisplay();
    if (counter < 0) {
        counterDisplay.style.color = 'red';
    } 
    if (counter >= 0) {
        counterDisplay.style.color = 'green';
    }
    if (counter > 10) {
        counterDisplay.style.fontWeight = 'bold';
    }
}

function decrement() {
    counter--;
    updateDisplay();
    if (counter < 0) {
        counterDisplay.style.color = 'red';
    }
    if (counter >= 0) {
        counterDisplay.style.color = 'green';
    }
      if (counter > 10) {
        counterDisplay.style.fontWeight = 'bold';
    }
}

function updateDisplay() {
    counterDisplay.textContent = counter;
}

incrementButton.onclick = increment;
decrementButton.onclick = decrement;