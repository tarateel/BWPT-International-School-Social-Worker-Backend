const express = require('express');
const Grades = require('./grades-model.js');
const router = express.Router();

router.get('/', (req, res) => {
  Grades.findGrades()
  .then(grades => {
    res.json(grades);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get list of grades' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Grades.findGradeById(id)
  .then(grade => {
    if (grade) {
      res.json(grade);
    } else {
      res.status(404).json({ message: 'Could not find grade with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Request failed' });
  });
});

// router.get('/:id/students', (req, res) => {
//   const { id } = req.params;

//   Grades.findStudentsByGrade(id)
//   .then(students => {
//     res.status(200).json(students)
//   })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({ message: 'Failed to get list of students' });
//   });
// });

module.exports = router;