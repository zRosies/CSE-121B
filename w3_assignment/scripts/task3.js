/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2


// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function add(number1,number2){
	return number1+number2
}
function addNumbers(){
	let addend1 = Number(document.querySelector('#addend1').value);
	let addend2 = Number(document.querySelector('#addend2').value);
	let sum = add(addend1,addend2)
    // console.log(sum)
    return document.querySelector('#sum').value=sum;
    
	
}

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

document.querySelector("#addNumbers").addEventListener('click', addNumbers)

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

function subtract(num1,num2){
	return num1-num2}

function subtractNumbers(){
	let minuend = document.querySelector('#minuend').value;
	let subtrahend= document.querySelector('#subtrahend').value;
	let difference= subtract(minuend,subtrahend);
	return document.querySelector("#difference").value=difference;
    	
	
}

document.querySelector("#subtractNumbers").addEventListener('click',subtractNumbers);
// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply=	(num1,num2)=>num1*num2;

function mulitplyNumbers(){
	let factor1 = document.querySelector('#factor1').value;
	let factor2= document.querySelector('#factor2').value;
	let product= multiply(factor1,factor2);
	return document.querySelector("#product").value=product;		
	
}

document.querySelector("#multiplyNumbers").addEventListener('click',mulitplyNumbers);
// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers


const divide=(num1,num2) => num1/num2;

function divideNumbers(){
	let dividend = document.querySelector('#dividend').value;
	let divisor= document.querySelector('#divisor').value;
	let quotient= divide(dividend, divisor);
	return document.querySelector("#quotient").value=quotient;		
	
}

document.querySelector('#divideNumbers').addEventListener('click',divideNumbers)
// Step 9: Test all of the mathematical functionality of the task3.html page.





/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const date = new Date();

// Step 2: Declare a variable to hold the current year
let year;
// 
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year=date.getFullYear()
// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector('#year').textContent=year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

const array=[]
let i=1
for (i; i < 26; i++){
    array.push(i)
}
// console.log(array)

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent=array.join(', ')

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const oddNumbers=array.filter(function (number){    
    if (number%2 !== 0){
        return number;
        // console.log(number)   
        // odd.push(number)    
    } 
   
})
document.querySelector("#odds").innerHTML=oddNumbers.join(', ');

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evenNumbers=array.filter(function(number){
    if(number%2===0){
        return number
    }
})

document.querySelector("#evens").innerHTML=evenNumbers.join(', ')


// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
//Reduce functions requires two paramenters an accumulator and a current value;
let accumulator=0;
const sum=array.reduce((accumulator, num)=> accumulator+=num);


document.querySelector('#sumOfArray').innerHTML=sum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const multiple=array.map(function(number){
    if (number){
        return number*=2
    }
})

document.querySelector('#multiplied').innerHTML=multiple.join(', ')
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const sumar=multiple.reduce((accummulator,number)=>accummulator+=number);

document.querySelector("#sumOfMultiplied").innerHTML=sumar;