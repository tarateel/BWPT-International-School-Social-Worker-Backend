const bcrypt = require('bcryptjs');
const express = require('express');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model');
const secrets = require('../config/secrets');
const authenticate = require('../auth/authenticate-middleware');

const router = require('express').Router();

router.post('/register', async (req, res, next) => {
  try {
    const registered = await Users.add(req.body)

    res.status(201).json(registered)
  } catch (err) {
    console.log(err);
    next(err)
  }
});


router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const user = await Users.findByUsername({ username }).first()
    const passwordValid = await bcrypt.compare(password, user.password)

    if (user && passwordValid) {

      const token = jwt.sign({
        subject: user.id,
        username: user.username
      }, secrets.jwt, {
        expiresIn: '10d'
      })

      res.status(200).json({
        token: token,
        message: `Welcome, ${user.username}. You have successfully logged in`
      })
    } else {
      res.status(401).json({
        message: 'You are not authorized to view this information. Please check your username and password and try again.'
      })
    }
  } catch (err) {
    console.log(err);
    next(err)
  };
});


module.exports = router