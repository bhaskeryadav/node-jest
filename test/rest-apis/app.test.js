const request = require('supertest');
import app from './../../src/common/server';
import Boot from './../../src/index';

describe("Rest Service unit test",()=>{
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
});
