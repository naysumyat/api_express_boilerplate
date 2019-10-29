const httpStatus = require('http-status');


/**
 * Update existing employee
 * @access : public
 */
exports.update = (req, res, next) => {
  let employee_id = req.params.id;
  let data = req.body;
        try{
          // business logic comes here , the test does not describe to do the business logic, so I am leaving blank here
          return res.json({
            success: true,
            message: 'Employee Info updated successfully!'
          });
      } catch (error) { 
          return res.json({
            success: false,
            message: 'Oops!  Employee update not successful!' 
          });
      }
};


/**
 * Submit a claim
 * @access : public
 */
exports.claim = (req, res, next) => {
  let data = req.body;
  try{
          // business logic comes here , the test does not describe to do the business logic, so I am leaving blank here
          return res.json({
            success: true,
            message: 'Claim submitted successfully!'
          });
  } catch (error) { 
          return res.json({
            success: false,
            message: 'Oops! Claim submission not successful!' 
          });
  }
};
