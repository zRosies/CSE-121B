/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myname = 'Gustavo Bispo';


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent=myname;

// Step 3: declare and instantiate a variable to hold the current year
const date = new Date();
const year = date.getFullYear();


// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent=year;


// Step 5: declare and instantiate a variable to hold the name of your picture
const picture = "images/gentle.jpg";

// Step 6: copy your image into the "images" folder

//Done

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("header img").setAttribute('src',picture);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let foods = [  'Chocolate',' Açaí',' Barbecue'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent=foods;


// Step 3: declare and instantiate a variable to hold another favorite food
const fav1 = ' Chicken'


// Step 4: add the variable holding another favorite food to the favorite food array

foods.push(fav1);

// Step 5: repeat Step 2
document.querySelector('#food').textContent=foods;


// Step 6: remove the first element in the favorite foods array
foods.shift();


// Step 7: repeat Step 2
document.querySelector('#food').textContent=foods;


// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2

document.querySelector('#food').textContent=foods;



