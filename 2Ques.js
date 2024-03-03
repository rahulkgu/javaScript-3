 let student = {
     Name: "Rahul",
     Age: 19,
     Grade: 'A'
 };

 function newGrade(newNum) {
     student.Grade = newNum;
 }
 newGrade('C');
 console.log(student);