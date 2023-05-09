
function getGrades() {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    const selector=document.querySelector("#grades").value

    const cleangrades = selector.split(',').map(grade => grade.trim().toUpperCase());
    console.log(cleangrades)
    return cleangrades
    }
   

  
function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let points = 0;
    if (grade === "A") {
        points = 4;
    } 
    else if (grade === "B") {
        points = 3;
    }
    else if (grade === "C"){
        points= 2;
    }
    else if (grade == "D"){
        points = 1;
    }
    else{
        points = 0;
    }
    return points;
  }
  
function calculateGpa(grades) {
    const gradePoints = grades.map((grade) => lookupGrade(grade));
    // calculates the GPA
    const gpa =
      gradePoints.reduce((total, num) => total + num) / gradePoints.length;
    // return the GPA
    return gpa.toFixed(1);
}
  
function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
    const output = document.querySelector(selector);
    output.innerText = gpa;
}
  
  function clickHandler() {
    // when the button in our html is clicked:
    const gpa = getGrades();
    const gpapoints= calculateGpa(gpa);
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    outputGpa(gpapoints, "#output")
    // display the gpa
}

document.querySelector("#submitButton").addEventListener("click",clickHandler);