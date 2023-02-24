//Write your pseduo code first! 
    // onclick 
document.querySelector('#submit').addEventListener("click", function() {
    convertTemp(getTemp(), getOutputUnit());
})
// get fahrenheit input
function getTemp() {
    return document.querySelector('#temp').value;
}
function getOutputUnit() {
    return document.querySelector('input[name="unit"]:checked').value;
}
// convert 
function convertTemp(inputTemp, unit) {
    let result = (unit == 'celsius') 
    ? (inputTemp - 32) * 0.556 
    : (inputTemp * 1.8) + 32; 
    document.querySelector('#result').innerText = result;
}
// write to dom