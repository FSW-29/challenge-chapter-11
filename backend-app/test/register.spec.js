const request = require('supertest');
const app = require('../app');

describe('Create Test for Register API: /api/v1/register', () => {
  // # Positive Case  
  // # Kalau mau coba test ini tolong inputUser diisi dengan data baru
  // # Sementara saya comment dulu
  // test('Test Success Register and Store to Database', async () => {
  //   const inputUser = {
  //     email: 'hellolaravel@gmail.com',
  //     username: 'laravel2009',
  //     password: '12345678',
  //     biodata: 'my name is laravel',
  //     city: 'California',
  //     socialMedia: 'https://instagram.com/laravel'
  //   };

  //   const response = await request(app)
  //     .post("/api/v1/register")
  //     .send(inputUser);

  //     expect(response.status).toBe(200);
  //     expect(response.body).toHaveProperty("message");
  //     expect(response.body).toHaveProperty("data");
  // });

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

  test('Test Register User by Using the Email that has Been Used', async () => {
    const inputUser = {
      email: 'hellogolang@gmail.com',
      username: 'angular2011',
      password: '12345678',
      biodata: 'my name is angular',
      city: 'California',
      socialMedia: 'https://instagram.com/angular'
    };

    const response = await request(app)
      .post("/api/v1/register")
      .send(inputUser);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
  });

  test('Test Register User by Using the Username that has Been Used', async () => {
    const inputUser = {
      email: 'helloangular@gmail.com',
      username: 'golang2010',
      password: '12345678',
      biodata: 'my name is angular',
      city: 'California',
      socialMedia: 'https://instagram.com/angular'
    };

    const response = await request(app)
      .post("/api/v1/register")
      .send(inputUser);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty("message");
  });
});
