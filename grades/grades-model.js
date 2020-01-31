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

module.exports = {
  findGrades,
  findGradeById
};