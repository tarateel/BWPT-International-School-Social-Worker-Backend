const express = require("express")
const helmet = require("helmet")
const cors = require("cors")

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const studentsRouter = require('../students/students-router.js');

const morgan = require("morgan")

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/students', authenticate(), studentsRouter);

server.get('/', (req, res, next) => {
  res.send('Ghana Make a Difference')
});

server.use((err, req, res, next) => {
  console.log('Error:', err)
  res.status(500).json({
    message: 'Something went wrong...'
  })
});

module.exports = server;