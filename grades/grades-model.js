const db = require('../database/dbConfig');


function findGrades() {
  return db('grades')
    .select();
};

function findGradeById(id) {
	return db('grades')
		.where({ id })
		.first();
};

function findStudentsByGrade(id) {
	return db('students')
		.join('grades', 'grades.id', 'students.grade_id')
		.where({ grade_id:grades.id })
		.select('*')
};

module.exports = {
  findGrades,
  findGradeById,
  findStudentsByGrade
};