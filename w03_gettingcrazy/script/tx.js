// const log = document.querySelector("#log");

// document.addEventListener("keydown", logKey);

// function logKey(e) {
//   // how do we know which key was pressed?
//   console.log(e);
//   // checkout e.code, e.key, and e.keyCode
//   // what is the difference?
// }


// 1-Activity 1 - Map
let ar = ['One','Two','Three'];

const my_new_ar= ar.map(function (ar){
    return `<li>${ar}</li>`;
})

document.querySelector("#log").innerHTML= my_new_ar.join("");

// Activity 2 - Map
let ar2=['A','B','A'];
let gpa=4;
let gpa2=3;
let gpa3=1;
const a='A'
const b= 'B'

const new_ar2= ar2.map(function(ar2){
    if (ar2===a){
        ar2=gpa;
    }
    else if(
        ar2===b){
            ar2=gpa2}
    else {
        ar2=gpa3;
    }
    return ar2;
})

// Activity 2 - Map Simple Solution
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);



// Activity 3- Normal Function
const totale= new_ar2.reduce(function(total,item){
    return total+item 
})
//or Arrow funcion
const totale2=new_ar2.reduce((item1,total1) => total1+item1);
console.log(`sum of items ${totale2}`);


const aaaa= totale2/new_ar2.length;
console.log(`Average of items ${aaaa}`);



//Activity 4-Filter

let frui_ar=['Watermelon','peach','apple','tomato','grape',''];



const fruit_ne=frui_ar.filter(function(word){
    if(word.length>6){
        return word   
    }
});
//or Arrow function
const fruit_ne2=frui_ar.filter((word)=>word.length>6);
console.log(fruit_ne2)

//Activity 5-indexOf

const num_ar=[12,34,21,54];
const luck_number=21;
let ind=num_ar.indexOf(luck_number);

console.log(ind)



