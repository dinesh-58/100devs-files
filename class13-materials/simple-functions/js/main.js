document.querySelector('#add').onclick = function() {add.apply(this, getNumbers());}
document.querySelector('#multiply').onclick = function() {multiply.apply(this, getNumbers());}
document.querySelector('#divide').onclick = function() {divide.apply(this, getNumbers());}

function getNumbers() {
    let num1 = parseInt(document.querySelector('#one').value);
    let num2 = parseInt(document.querySelector('#two').value);
    
    return [num1, num2];
}
//create a function that adds two numbers and alerts the sum
function add(num1, num2) {
    alert("Sum is: " + (num1 + num2));
}

//create a function that multiplys two numbers and console logs the product

function multiply(num1, num2) {
    console.log("Product is: " + (num1 * num2));
}
//create a function that divides two numbers and returns the ???

function divide(num1, num2) {
    document.querySelector('#qr').innerText = "Answer: " + (num1 / num2);
}