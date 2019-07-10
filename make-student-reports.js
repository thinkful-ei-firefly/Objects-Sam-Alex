'use strict';

function makeStudentsReport(data) {
  const studentGrades=[];
  for (let i =0; i < data.length; i++) {
    studentGrades.push(`${data[i].name}: ${data[i].grade}`);
  }
  return studentGrades;
}

const array = [
  {name: 'Johnny Robot', grade: 'C'},
  {name: 'John Rob', grade: 'B'}
];

console.log(makeStudentsReport(array));