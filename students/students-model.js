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
	const [id] = await db('students').insert(student)
	return db('students')
		.where({ id })
		.first()
};

async function updateStudent(changes, id) {
	await db('students')
		.where({ id })
		.update(changes)
	
		return findStudentById(id)
};

function removeStudent(id) {
	return db('students')
		.where({ id })
		.select()
		.then(student => {
			if (!student) {
				return null
			} else {
				return db('students')
					.where({ id })
					.del()
					.then(() => {
						return student;
					})
			}
		})
};

module.exports = {
  findStudents,
  findStudentById,
  addStudent,
  updateStudent,
  removeStudent
};