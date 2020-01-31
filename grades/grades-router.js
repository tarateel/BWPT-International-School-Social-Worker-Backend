const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = require('express').Router();

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
      res.status(404).json({ message: 'Could not find student with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Request failed' });
  });
});

module.exports = router;