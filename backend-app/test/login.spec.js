const request = require('supertest');
const app = require('../app');

jest.useRealTimers();

describe('Create Test for Login API: api/v1/login', () => {
  // # Positive Case
  test('Test Success Login', async () => {
    const inputUser = {
      email: 'wawandarmawan@gmail.com',
      password: '12345678'
    };

    const response = await request(app)
      .post("/api/v1/login")
      .send(inputUser);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("profile");
  });

  test('Test Login With Symbol Password', async () => {
    const inputUser = {
      email: 'mursyid666@gmail.com',
      password: 'p@sswordsaya666!'
    };

    const response = await request(app)
      .post("/api/v1/login")
      .send(inputUser);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("data");
    expect(response.body).toHaveProperty("profile");
  });
  
  // # Negative Case
  test('Test Email and Password Null', async () => {
    const inputUserNull = {
      email: '',
      password: ''
    };

    const response = await request(app)
      .post('/api/v1/login')
      .send(inputUserNull);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test('Test Email False and Password True', async () => {
    const inputUser = {
      email: 'wawanhellinsky@gmail.com',
      password: '12345678'
    };

    const response = await request(app)
      .post('/api/v1/login')
      .send(inputUser)

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test('Test Email True and Password False', async () => {
    const inputUser = {
      email: 'wawandarmawan@gmail.com',
      password: 'passwordsaya'
    };

    const response = await request(app)
      .post('/api/v1/login')
      .send(inputUser);
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
});
