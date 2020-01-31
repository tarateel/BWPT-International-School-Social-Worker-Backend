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

async function addStudent(student) {
  const [id] = await db('students')
    .insert(student);
  return findStudentById(id[0]);
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