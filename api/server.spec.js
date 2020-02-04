const request = require('supertest');
const server = require('./server');
const db = require('../database/dbConfig');

describe('Test suite: register and login', () => {
  beforeAll(async () => {
    await db('users').truncate();
  });

  it('adds a user, returns JSON object', async () => {
    return res = await request(server)
      .post('/api/auth/register')
      .send({
        "username": "testuser",
        "password": "test",
        "organization": "test_org",
        "first_name": "test_first_name",
        "last_name": "test_last_name",
        "role": "test_role"
      })
      .then(res => {
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body.username).toBeString()
      })
  });

  it('should log in and return a token', async () => {
    return res = await request(server)
      .post('/api/auth/login')
      .send({
        username: "testuser",
        password: "test"
      })
      .then(res => {
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body.token).toBeTruthy();
      })
  });

})