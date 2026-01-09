const num1 = number(document.getElementById('numero1'));
const num2 = number(document.getElementById('numero2'));
const btn = document.getElementById('btn');
const div1 = 
function confronta() {
    if (num1.value > num2.value) {
  num1.style.backgroundColor = 'green';
  num2.style.backgroundColor = 'red';
    }
      if (num1.value < num2.value) {
  num1.style.backgroundColor = 'red';
  num2.style.backgroundColor = 'green';
    }
}
btn.onclick = confronta;