// const knex = require('knex');

// const dbConfig = require('../knexfile.js');

// const environment = process.env.NODE_ENV || 'dev';

// module.exports = knex(dbConfig[environment]);

const dbEngine = process.env.DB || 'dev'
const config = require('../knexfile')[dbEngine]
module.exports = require('knex')(config)