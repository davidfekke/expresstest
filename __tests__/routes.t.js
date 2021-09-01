
import request from 'supertest';
import express from 'express';
import http from 'http';
import router from '../routes/main.js';

const app = new express();

app.use('/', router);
const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);

describe('get Endpoints', () => {
  test('responds to /hello/:name', async () => {
    const res = await request(app)
      .get('/hello/person')
      .send();
    console.log(res.body);
    expect(res.statusCode).toEqual(200);
    //expect(res.body).toEqual('hello person');
  });
});

// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//         expect(true).toBe(true);
//     });
// });
