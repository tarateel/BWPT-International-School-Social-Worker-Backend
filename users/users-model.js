const bcrypt = require('bcryptjs');
const db = require('../database/dbConfig');

userInfo = {
  'id': 'id',
  'username': 'username',
  'password': 'password',
  'email': 'email',
  'phone': 'phone',
  'organization': 'organization',
  'first_name': 'first_name',
  'last_name': 'last_name',
  'role': 'role'
}

function find() {
  return db('users')
    .select(userInfo)
};

function findByUsername(username) {
  return db('users')
    .where(username)
    .select(userInfo)
};

function findById(id) {
  return db('users')
    .where({ id })
    .first(userInfo)
}

async function add(user) {
  user.password = await bcrypt.hash(user.password, 14)

  const [id] = await db('users')
    .insert(user)

  return findById(id)
};

module.exports = {
  find,
  findByUsername,
  findById,
  add
};