const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [
        {
        sectionNum:1,
        roomnum: 'STC 353',
        enrolled: 26,
        days: 'TTh',
        instructor: 'Bro T'},
        {
        sectionNum: 2,
        roomnum:'STC 347',
        enrolled: 28,
        days: 'TTh',
        instructor: 'Sis A'}
    ],
    enrollStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        }
    },
    dropStudent: function (sectionNum) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          this.sections[sectionIndex].enrolled--;
          renderSections(this.sections);
        }
    }

    
}

function NamNum(aCourse){
    const courseName = document.querySelector("#courseName")
    const courseNum= document.querySelector("#courseCode")
    courseName.textContent = aCourse.name;
    courseNum.textContent = aCourse.code;
    
}

function renderSections(section) {
    const html = section.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
    document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });


NamNum(aCourse);
renderSections(aCourse.section);

