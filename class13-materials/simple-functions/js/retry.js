// onclick event listeners for all 3 buttons
document.querySelector('#add').onclick = function () {
    add.apply(this, getInputs()); 
}
document.querySelector('#multiply').onclick = function () {
    multiply.apply(this, getInputs()); 
}
document.querySelector('#divide').onclick = function () {
    divide.apply(this, getInputs()); 
}
// get inputs
function getInputs() {
    num1 = parseInt(document.querySelector('#one').value);
    num2 = parseInt(document.querySelector('#two').value);
    return [num1, num2];
}  
// alert sum
function add(num1, num2) {
    alert(num1 + num2);
}

// console log product
function multiply(num1, num2) {
    console.log(num1 * num2);
}

// display division in dom
function divide(num1, num2) {
    document.querySelector('#qr').innerText = num1 / num2 ;
}