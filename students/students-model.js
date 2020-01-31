const db = require('../database/dbConfig');


function findStudents() {
  return db('students')
    .select();
};

function findStudentById(id) {
	return db('students')
		.where({ id })
		.first();
};

function addStudent(student) {
  return db('students')
    .insert(student)
		.then(ids => {
      return findStudentById(ids[0])
    })
};

async function updateStudent(changes, id) {
	await db('students')
		.where({ id })
		.update(changes)
	
		return findStudentById(id)
};

module.exports = {
  findStudents,
  findStudentById,
  addStudent,
  updateStudent
};