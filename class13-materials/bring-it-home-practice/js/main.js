// *Variables*
// Create a variable and console log the value
let n = 10;
console.log(n);

// Create a variable, add 10 to it, and alert the value

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1, n2, n3, n4) {
	alert(n1-n2-n3-n4);
}

// Create a function that divides one number by another and returns the remainder
function rem(n1, n2) {
	return (n1 % n2);
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jum(n1, n2) {
	if ((n1+n2) >50) {
		alert("Jumanji");
	}
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1, n2, n3) {
	if ((n1*n2*n3)%3 == 0) {
		alert("Zebra");
	}
}
