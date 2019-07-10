'use strict';

const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
  
  function enrollInSummerSchool(students) {
    // your code here
    const summerStudents = [];
    for (let i = 0; i < students.length; i++) {
        summerStudents.push({
            name: students[i].name,
            status: 'In summer school',
            course: students[i].course,
        })
    }
    return summerStudents;
  }