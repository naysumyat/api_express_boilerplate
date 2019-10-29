const express = require('express');
const controller = require('../../controllers/employee.controller');


const router = express.Router();

router
  .post('/submit/claim', controller.claim)
  /**
   * @api {post} v1/submit/claim Submit a Claim
   * @apiDescription Submit a claim 
   * @apiVersion 1.0.0
   * @apiName SubmitClain
   * @apiGroup Employee
   * @apiPermission user
   */

  .put('/employee/:id', controller.update);
  /**
   * @api {patch} v1/employee/:id Update Employee
   * @apiDescription Update some fields of an employee document
   * @apiVersion 1.0.0
   * @apiName UpdateEmployee
   * @apiGroup Employee
   * @apiPermission user
   */

module.exports = router;
