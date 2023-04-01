'use strict';

const filter = (allStudents, failedStudents) => {
  const successStudents = [];

  for (const student of allStudents) {
    if (!(failedStudents.includes(student))) {
      successStudents.push(student);
    }
  }
  
  return successStudents;
}

const allStudent = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudent = ['Сидоров', 'Смирнов', 'Попов'];

console.log(filter(allStudent, failedStudent));