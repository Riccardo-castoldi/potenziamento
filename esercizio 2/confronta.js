const btn = document.getElementById('btn');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
function confronta() {
const num1 = Number(document.getElementById('numero1').value);
const num2 = Number(document.getElementById('numero2').value);
    if (num1 > num2) {
  div1.style.backgroundColor = 'green';
  div2.style.backgroundColor = 'red';
    }
      if (num1 < num2) {
  div1.style.backgroundColor = 'red';
  div2.style.backgroundColor = 'green';
    }
      if (num1 === num2) {
  div1.style.backgroundColor = 'gray';
  div2.style.backgroundColor = 'gray';
    }
}
btn.onclick = confronta;