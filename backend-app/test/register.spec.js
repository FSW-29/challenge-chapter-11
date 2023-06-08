const request = require('supertest');
const app = require('../app');

describe('Create Test for Register API: /api/v1/register', () => {
  // # Positive Case  
  test('Test Success Register and Store to Database', async () => {
    const inputUser = {
      email: 'hellorussel@gmail.com',
      username: 'russel666',
      password: '12345678',
      biodata: 'my name is russel',
      city: 'Jakarta',
      socialMedia: 'https://instagram.com/russel666'
    };

    const response = await request(app)
      .post("/api/v1/register")
      .send(inputUser);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("message");
      expect(response.body).toHaveProperty("data");
  });

  // # Negative Case
  test('Test Body Register Null', async () => {
    const inputUser = {
      email: '',
      username: '',
      password: '',
      biodata: '',
      city: '',
      socialMedia: ''
    };

    const response = await request(app)
      .post('/api/v1/register')
      .send(inputUser);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });
});
