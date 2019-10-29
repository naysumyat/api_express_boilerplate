/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const { expect } = require('chai');
const sinon = require('sinon');
const app = require('../../../index');


const sandbox = sinon.createSandbox();



describe('Employee API', () => {


  beforeEach(async () => {
  });
  afterEach(() => sandbox.restore());
  const claimData = {key:"value"};
  describe('POST /v1/api/submit/claim', () => {
    it('should return success true upon successful claim', () => {
      return request(app)
        .post('/v1/api/submit/claim')
        .send(claimData)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.success).to.be.equal(true);
        });
    });


    it('should return success true upon successful update', () => {
      let employeeID = 1;
      const employeeData = {key:'value'};
      return request(app)
        .put('/v1/api/employee/'+employeeID)
        .send(employeeData)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.success).to.be.equal(true);
        });
    });


  });
});
